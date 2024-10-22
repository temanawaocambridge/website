import { gql } from '@apollo/client/core'

export const GET_HELP_FORM = gql`
  query Query {
    getHelpForm {
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

export const GET_CONTACT_FORM = gql`
  query Query {
    getContactForm {
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
