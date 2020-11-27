import React from 'react';
import { MenuHeader } from './';
import { Menu } from './';
import { useMenu } from '../context/menu-context';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../styles';

const MenuWrapper = () => {
 const [ open, setOpen ] = useMenu();
 
  return (
    <React.Fragment>
      <MenuHeader />
      <StyledMenuContainer>
        <Menu open={ open } setOpen={ setOpen } />
      </StyledMenuContainer>
    </React.Fragment>
  )
}

export default MenuWrapper;

const StyledMenuContainer = styled('nav')`
  position: relative;

  & > nav {
    background: ${colors.background};
    height: 100%;
    overflow-y: scroll;
    position: fixed;
    scroll-behavior: smooth;
    top: auto;
    width: 100%;
    right: auto;
    transform: translate(-100%,0);
    transition: transform 0.4s;

    &[open] {
      transform: translate(0,0);
    }

    @media (min-width: ${breakpoints.mobile}) {
      width: 26rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      width: 100%;
      position: static;
      transform: none;
      transition: none;
    }
  }

  & > .overlay {
    @media (min-width: ${breakpoints.tablet}) { display: none; }
  }
`
