const { gql } = require('apollo-server-express')

module.exports = gql`
  input GetHelpRequestInput {
    firstName: String!
    lastName: String
    email: String!
  }
  type Query {
    test: Boolean
  }

  type Mutation {
    submitGetHelpRequest(fields: GetHelpRequestInput): Boolean
  }
`
