import React from 'react';
import { gql, useMutation, useApolloClient } from '@apollo/client';

const LogoutButton = () => {
  const client = useApolloClient();

  const LOGOUT_USER = gql`
    mutation logout {
      logout
    }
  `;

  const [logout, {loading, error}] = useMutation<any>(
    LOGOUT_USER, {
      onCompleted() {
        document.cookie = 'signedin=false;Max-Age=0';
      }
    }
  )

  const onClickHandler = () => {
    logout();
    client.resetStore().catch((error) => {
      console.log('logged out')
    })
  }

  if (loading) return <p>Loading...</p>;

  if(error) return <p>error...</p>

  return (
    <button
      onClick={() => {
        onClickHandler();
      }
    }>
      Log Out
    </button>
  );
}

export default LogoutButton;
