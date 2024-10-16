import apolloClient from '@/plugins/apollo'
import { SUBMIT_GET_HELP_REQUEST } from './mutation'
import { GET_HELP_REQUEST_FIELDS } from './query'

export default {
  namespaced: true,
  state: {
    getHelpFields: []
  },
  getters: {
    getHelpFields: state => state.getHelpFields
  },
  mutations: {
    setGetHelpFields (state, getHelpFields) {
      state.getHelpFields = getHelpFields
    }
  },
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
    },
    async populateGetHelpForm ({ dispatch, commit }) {
      const fields = await dispatch('getHelpRequestFields')
      console.log(fields)
      commit('setGetHelpFields', fields)
    }
  }
}

function convertObjectToArray (obj) {
  return Object.entries(obj).map(([key, value]) => ({
    key,
    value
  }))
}