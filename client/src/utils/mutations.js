import { gql } from '@apollo/client'

export const ADD_RESPONSE = gql`
    mutation addResponse($name: String!, $email: String!, $message: String) {
        addResponse(name: $name, email: $email, message: $message) {
            name
            email
            message
    }
  }
`;