import { ApolloClient, HttpLink } from '@apollo/client/core'
import { InMemoryCache } from '@apollo/client/cache'

const uri = import.meta.env.PROD
  ? import.meta.env.VITE_GRAPHQL_URL
  : 'http://localhost:4000/graphql'

const httpLink = new HttpLink({
  uri
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default apolloClient
