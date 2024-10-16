// import { provideApolloClient } from '@vue/apollo-composable'

// Plugins
import vuetify from './vuetify'
// import apolloClient from './vue-apollo'

export function registerPlugins (app) {
  app.use(vuetify)

  // app.use(provideApolloClient(apolloClient))
}
