import React from 'react';
import { Layout } from '../components';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <Layout>
        <Title>💮 Kungfuyou Auth Boilerplate 💮</Title>
        <p>This is the placeholder home page</p>
    </Layout>
  )
}

export default Home;

const Title = styled('h2')`
  textAlign: 'center';
`;