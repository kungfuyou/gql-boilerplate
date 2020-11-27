import { gql } from '@apollo/client';

export const LOGGED_IN_USER = gql`
  query me {
    id
    email
    username
  }
`