import { gql } from '@apollo/client/core'

export const SUBMIT_HELP_REQUEST = gql`
  mutation($fields: [FieldInput], $recaptchaToken: String!) {
    submitHelpRequest (fields: $fields, recaptchaToken: $recaptchaToken)
  }
`

export const SUBMIT_CONTACT_REQUEST = gql`
  mutation($fields: [FieldInput], $recaptchaToken: String!) {
    submitContactRequest (fields: $fields, recaptchaToken: $recaptchaToken)
  }
`
