require('dotenv').config()
const axios = require('axios')
const getAccessToken = require('../services/get-access-token')
const verifyRecaptcha = require('../services/recaptcha')
const CustomField = require('graphql-custom-field')

const SITE_ID = process.env.SITE_ID
const LIST_ID = process.env.LIST_ID

function getHeaders(accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  };
}

module.exports = {
  CustomField,
  Query: {
    test: () => true,
    async getHelpRequestFields() {
      const accessToken = await getAccessToken();
      if (!accessToken) {
        console.error('No access token found');
        return [];
      }
    
      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/columns`;
    
      try {
        const res = await axios.get(graphUrl, {
          headers: getHeaders(accessToken)
        });
    
        if (res.data && res.data.value) {
          return res.data.value.filter(field => !field.readOnly && field.description);
        } else {
          console.error('Unexpected response format:', res);
          return [];
        }
    
      } catch (error) {
        if (error.response) {
          const { status } = error.response;
    
          if (status === 401) {
            console.error('Unauthorized access - possible invalid token:', error.response.data);
          } else if (status === 403) {
            console.error('Forbidden - insufficient permissions:', error.response.data);
          } else {
            console.error(`Error fetching list fields (status: ${status}):`, error.response.data);
          }
        } else if (error.request) {
          console.error('No response received from Microsoft Graph API:', error.request);
        } else {
          console.error('Error setting up the request:', error.message);
        }
    
        return [];
      }
    },
  },    
  Field: {
    key: (field) => field.name,
    __resolveType(field) {
      if (field?.text?.allowMultipleLines === false) return 'TextField';
      if (field?.text?.allowMultipleLines === true) return 'TextAreaField';
      if (field?.choice?.displayAs === 'checkBoxes') return 'CheckboxField';
      if (field?.boolean) return 'BooleanField';

      return null;
    }
  },
  TextField: {
    key: (field) => field.name,
    type: () => 'text'
  },
  TextAreaField: {
    key: (field) => field.name,
    type: () => 'textarea'
  },
  BooleanField: {
    key: (field) => field.name,
    type: () => 'boolean'
  },
  CheckboxField: {
    key: (field) => field.name,
    type: () => 'checkbox',
    choices: (field) => {
      return field?.choice?.choices;
    }
  },
  Mutation: {
    async submitGetHelpRequest (_, { fields, recaptchaToken }) {
      const recaptchaVerification = await verifyRecaptcha(recaptchaToken)
      
      if (!recaptchaVerification) {
        console.error('reCAPTCHA verification failed')
        return false
      }
      // if (score === null || score < 0.5) {
      //   throw new Error('reCAPTCHA validation failed.')
      // }
      
      const accessToken = await getAccessToken()

      if (!accessToken) {
        console.error('access token failed')
        return false
      }

      const listItemData = {
        fields: convertArrayToObject(fields)
      }
  
      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/items`
  
      try {
        await axios.post(graphUrl, listItemData, {
          headers: getHeaders(accessToken)
        })
  
        return true;
      } catch (err) {
        console.error('API Error Response:', err.response ? err.response.data : err.message)
        return false
      }
    }
  }
}

function convertArrayToObject(arr) {
  return arr.reduce((acc, { key, value }) => {
    if (isEmpty(value)) return acc;

    if (Array.isArray(value)) {
      acc[`${key}@odata.type`] = 'Collection(Edm.String)'
    }

    acc[key] = value

    return acc
  }, {})
}

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (Array.isArray(value) && value.length === 0)
  )
}
