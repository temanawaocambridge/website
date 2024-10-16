import apolloClient from '@/plugins/apollo'
import { SUBMIT_GET_HELP_REQUEST } from './mutation'
import { GET_HELP_REQUEST_FIELDS } from './query'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getHelpRequestFields (_) {
      try {
        const { data } = await apolloClient.query({
          query: GET_HELP_REQUEST_FIELDS
        })

        return data.getHelpRequestFields
      } catch (error) {
        console.error('Error getting help request fields:', error)
        throw new Error('Could not get the help request field')
      }
    },
    async submitGetHelpRequest (_, fields) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: SUBMIT_GET_HELP_REQUEST,
          variables: { fields: convertObjectToArray(fields) }
        })

        return data.submitGetHelpRequest
      } catch (error) {
        console.error('Error submitting get help request:', error)
        throw new Error('Could not submit get help request')
      }
    }
  }
}

function convertObjectToArray (obj) {
  return Object.entries(obj).map(([key, value]) => ({
    key,
    value
  }))
}
