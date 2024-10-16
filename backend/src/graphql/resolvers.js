require('dotenv').config()
const axios = require('axios')
const getAccessToken = require('../services/get-access-token')

const SITE_ID = process.env.SITE_ID
const LIST_ID = process.env.LIST_ID

function getHeaders (accessToken) {
  return {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
}

module.exports = {
  Query: {
    test: () => true,
    async getHelpRequestFields () {
      const accessToken = await getAccessToken()

      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/columns`

      try {
        const res = await axios.get(graphUrl, {
          headers: getHeaders(accessToken)
        })

        return res.data.value.filter(field => !field.readOnly && field.description)
      } catch (error) {
        console.error('Error fetching list fields:', error)
        throw new Error('Could not retrieve list fields')
      }
    }
  },
  Field: {
    key: (field) => field.name,
    __resolveType (field) {
      if (field?.text?.allowMultipleLines === false) return 'TextField'
      if (field?.text?.allowMultipleLines === true) return 'TextAreaField'
      if (field?.choice?.displayAs === 'checkBoxes') return 'CheckboxField'
      if (field?.boolean) return 'BooleanField'

      // throw new Error('unsupported type')
      return null
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
      return field?.choice?.choices
    }
  },
  Mutation: {
    async submitGetHelpRequest (_, { fields }) {
      const accessToken = await getAccessToken()

      const listItemData = {
        fields: {
          FirstName: fields.firstName,
          LastName: fields.lastName,
          Email: fields.email
        }
      }

      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${SITE_ID}/lists/${LIST_ID}/items`

      try {
        await axios.post(graphUrl, listItemData, {
          headers: getHeaders(accessToken)
        })

        return true
      } catch (err) {
        console.log(err.response.data.error)
        throw new Error('Submit Help Request Failure')
      }
    }
  }
}
