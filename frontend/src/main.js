/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
// import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router'
import store from './store'

const app = createApp(App)

// registerPlugins(app)

app.use(router)
app.use(store)

app.mount('#app')

