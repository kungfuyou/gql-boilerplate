import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { LoginForm, Layout } from '../components';
//import { isLoggedInVar } from '../cache';
import * as LoginTypes from './__generated__/login';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        username
        email
      }
      token
    }
  }
`;

export default function Login() {
  const [login, { loading, error }] = useMutation<
    LoginTypes.login, LoginTypes.loginVariables
  >(
    LOGIN_USER, {
      onCompleted({ login }) {
        if ( null === login ) {
          throw Error('login is null');
        }
        console.log('redirect')
      },
      onError(error) {
        console.log(error.message)
      }
    }
  );

  if (loading) return <p>Loading...</p>;
  
  return (
  <Layout>
    <LoginForm login={login} error={error} />
  </Layout>
  )
}

