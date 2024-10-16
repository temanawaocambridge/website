const { gql } = require('apollo-server-express')

module.exports = gql`
  input GetHelpRequestInput {
    firstName: String!
    lastName: String
    email: String!
  }

  interface Field {
    key: ID!
    type: FieldType
    displayName: String
    description: String
    required: Boolean
  }

  enum FieldType {
    text
    textarea
    checkbox
    radio
    boolean
  }

  type TextField implements Field {
    key: ID!
    type: FieldType
    displayName: String
    description: String
    required: Boolean
  }

  type TextAreaField implements Field {
    key: ID!
    type: FieldType
    displayName: String
    description: String
    required: Boolean
  }

  type CheckboxField implements Field {
    key: ID!
    type: FieldType
    displayName: String
    description: String
    required: Boolean
    
    choices: [String]
  }

  type BooleanField implements Field {
    key: ID!
    type: FieldType
    displayName: String
    description: String
    required: Boolean
  }

  type Query {
    test: Boolean
    getHelpRequestFields: [Field]
  }

  type Mutation {
    submitGetHelpRequest(fields: GetHelpRequestInput): Boolean
  }
`
