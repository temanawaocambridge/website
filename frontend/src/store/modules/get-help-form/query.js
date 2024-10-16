import { gql } from '@apollo/client/core'

export const GET_HELP_REQUEST_FIELDS = gql`
  query Query {
    getHelpRequestFields {
      key
      type
      displayName
      description
      required

      ...on CheckboxField {
        choices
      }
    }
  }
`
