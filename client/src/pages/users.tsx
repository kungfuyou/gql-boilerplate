import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';

interface IUser {
  id?: number,
  email?: string,
  username?: string
}

export const ALL_USERS = gql`
  query allUsers {
    allUsers {
      id
      email
      username
    }
  }
`;

export default function Users() {
  const [getAllUsers, { loading, error, data } ] = useLazyQuery<any>(
    ALL_USERS, {
      onCompleted({ allUsers }) {
        console.log(data);
      }
    }
  );

  if (loading) return <p>Loading ...</p>;

  const errorMessage = error ? (<p>{error.message}</p>) : null;

  const onClick = () => {
    getAllUsers();
  }
  
  if (loading) return <p>Loading...</p>;

  return (
    <React.Fragment>
      <button onClick={ () => onClick() }>Get Users</button>
      { data?.allUsers?.map((user:IUser, index:number) => (
        <div key={user.id}>{user.username} - {user.email}</div>
      ))}
      {errorMessage}
    </React.Fragment>
  )
}