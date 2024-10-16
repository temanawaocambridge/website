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
      const accessToken = await getAccessToken()

      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/columns`

      try {
        const res = await axios.get(graphUrl, {
          headers: getHeaders(accessToken)
        });

        return res.data.value.filter(field => !field.readOnly && field.description);
      } catch (error) {
        console.error('Error fetching list fields:', error);
        throw new Error('Could not retrieve list fields');
      }
    }
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
        throw new Error('reCAPTCHA verification failed');
      }
      // if (score === null || score < 0.5) {
      //   throw new Error('reCAPTCHA validation failed.')
      // }
      
      const accessToken = await getAccessToken()

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
        throw new Error('Submit Help Request Failure')
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
