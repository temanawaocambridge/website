import { createStore } from 'vuex'
import pexels from './modules/pexels'

const store = createStore({
  modules: {
    pexels
  }
})

export default store
