import { gql } from '@apollo/client/core'

export const SUBMIT_GET_HELP_REQUEST = gql`
  mutation($fields: [FieldInput], $recaptchaToken: String!) {
    submitGetHelpRequest (fields: $fields, recaptchaToken: $recaptchaToken)
  }
`
