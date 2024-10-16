import apolloClient from '@/plugins/apollo'
import { SUBMIT_GET_HELP_REQUEST } from './mutation'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async submitGetHelpRequest(_, fields) {
      try {
        const { data } = await apolloClient.mutate({
          mutation: SUBMIT_GET_HELP_REQUEST,
          variables: { fields }
        })
  
        return data.submitGetHelpRequest
      } catch (error) {
        console.error('Error submitting get help request:', error)
        throw new Error('Could not submit get help request')
      }
    }
  }
}
