import { createStore } from 'vuex'

import getHelpForm from './modules/get-help-form'
import pexels from './modules/pexels'

const store = createStore({
  modules: {
    getHelpForm,
    pexels
  }
})

export default store
