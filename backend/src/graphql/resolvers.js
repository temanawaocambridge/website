require('dotenv').config()
const axios = require('axios')
const getAccessToken = require('../services/get-access-token')

module.exports = {
  Query: {
    test: () => true
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

      const graphUrl = `https://graph.microsoft.com/v1.0/sites/${process.env.SITE_ID}/lists/${process.env.LIST_ID}/items`

      try {
        await axios.post(graphUrl, listItemData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        })

        return true
      } catch (err) {
        throw new Error('Submit Help Request Failure')
      }
    }
  }
}
