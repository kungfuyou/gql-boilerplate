import React from 'react';
import { MenuWrapper }  from './index';
import { MenuProvider } from '../context/menu-context';
import { GlobalStyles } from '../styles/';
import styled from '@emotion/styled';

interface LayoutProps  {
  children?: any
}

function Layout(props: LayoutProps) {
  return (
    <TwoColumn>
      <GlobalStyles />
      <MenuProvider>
        <MenuWrapper />
      </MenuProvider>
      <StyledPage className="page" role="main">
        {props.children}
      </StyledPage>
    </TwoColumn>
  );
}

export default Layout;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: minmax(min-content, max-content);
  grid-template-areas:
  "header header"
  "sidebar main";
  min-height: 100vh;
`;

const StyledPage = styled('main') `
  grid-area: main
`