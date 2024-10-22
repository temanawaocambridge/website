import { createStore } from 'vuex'

import forms from './modules/forms'
import pexels from './modules/pexels'


const store = createStore({
  modules: {
    forms,
    pexels
  }
})

export default store
