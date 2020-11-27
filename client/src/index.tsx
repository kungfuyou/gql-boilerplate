import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';

import Pages from "./pages";
import { cache } from './cache';

const client: ApolloClient<any> = new ApolloClient({
  cache,
  link: createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'include',
  }),
  headers: {
    'client-name': 'Auth Boilerplate',
    'client-version': '1.0.0',
  },
  resolvers: {},
  connectToDevTools: true
});

console.log('CLIENT', client);
console.log(client.cache);

ReactDOM.render(
  <ApolloProvider client={client}>
    <Pages />
  </ApolloProvider>
  ,
  document.getElementById('root')
);
