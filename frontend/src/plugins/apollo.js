import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
})

const apolloClient = new ApolloClient({
  link: httpLink, 
  cache: new InMemoryCache()
})

export default apolloClient
