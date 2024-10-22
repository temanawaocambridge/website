import apolloClient from '@/plugins/apollo'
import { SUBMIT_HELP_REQUEST, SUBMIT_CONTACT_REQUEST } from './mutation'
import { GET_HELP_FORM, GET_CONTACT_FORM } from './query'

export default {
  namespaced: true,
  state: {
    helpForm: [],
    contactForm: []
  },
  getters: {
    helpForm: state => state.helpForm,
    contactForm: state => state.contactForm
  },
  mutations: {
    setHelpForm (state, helpForm) {
      state.helpForm = helpForm
    },
    setContactForm (state, contactForm) {
      state.contactForm = contactForm
    }
  },
  actions: {
    async generateRecaptchaToken () {
      return new Promise((resolve, reject) => {
        grecaptcha.ready(async () => {
          try {
            const token = await grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'submit' });
            resolve(token);
          } catch (error) {
            console.error('Error generating reCAPTCHA token:', error);
            reject(error);
          }
        });
      });
    },
    async populateForms ({ dispatch }) {
      await Promise.all([
        dispatch('populateHelpForm'),
        dispatch('populateContactForm')
      ])
    },



    // HELP FORM
    async getHelpForm (_) {
      try {
        const { data } = await apolloClient.query({
          query: GET_HELP_FORM
        })

        return data.getHelpForm
      } catch (error) {
        console.error('Error getting help request fields:', error)
        throw new Error('Could not get the help request field')
      }
    },
    async populateHelpForm ({ dispatch, commit }) {
      const fields = await dispatch('getHelpForm')
      commit('setHelpForm', fields)
    },
    async submitHelpRequest ({ dispatch }, fields) {
      try {
        const recaptchaToken = await dispatch('generateRecaptchaToken')

        const { data } = await apolloClient.mutate({
          mutation: SUBMIT_HELP_REQUEST,
          variables: {
            fields: convertObjectToArray(fields),
            recaptchaToken
          }
        })

        return data.submitHelpRequest
      } catch (error) {
        console.error('Error submitting get help request:', error)
        throw new Error('Could not submit get help request')
      }
    },
    

    // CONTACT FORM
    async getContactForm (_) {
      try {
        const { data } = await apolloClient.query({
          query: GET_CONTACT_FORM
        })

        return data.getContactForm
      } catch (error) {
        console.error('Error getting contact request fields:', error)
        throw new Error('Could not get the contact request field')
      }
    },
    async populateContactForm ({ dispatch, commit }) {
      const fields = await dispatch('getContactForm')
      commit('setContactForm', fields)
    },
    async submitContactRequest ({ dispatch }, fields) {
      try {
        const recaptchaToken = await dispatch('generateRecaptchaToken')

        const { data } = await apolloClient.mutate({
          mutation: SUBMIT_CONTACT_REQUEST,
          variables: {
            fields: convertObjectToArray(fields),
            recaptchaToken
          }
        })

        return data.submitContactRequest
      } catch (error) {
        console.error('Error submitting contact request:', error)
        throw new Error('Could not submit contact request')
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
