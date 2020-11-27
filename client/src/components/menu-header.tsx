import React from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints } from '../styles';
import { MenuButton } from './';
import { useMenu } from '../context/menu-context';
import { Link } from "react-router-dom"

const MenuHeader = () => {
 const [ open, setOpen ] = useMenu();
 
  return (
    <StyledHeader>
        <MenuButton open={open} setOpen={setOpen} className="main-menu-button"/>
        <StyledNav>
          <StyledLink to="/register">register</StyledLink>
          <StyledLink to="/login">login</StyledLink>
          <StyledLink to="/">logout</StyledLink>
        </StyledNav>
    </StyledHeader>
  )
}

export default MenuHeader;

const StyledHeader = styled('header')`
  align-items: center;
  background: ${colors.background};
  border-bottom: 2px solid ${colors.text};
  display: flex;
  grid-area: header;
  min-height: 4.5rem;
  padding: 1rem;
  position: sticky;
  top: 0;

  @media (min-width: ${breakpoints.tablet}) {
    & button {
      display: none;
    }
  }
`;

const StyledNav = styled('nav')`
  margin-left: auto;
`;

const StyledLink = styled(Link)`
  border-radius: 1rem;
  color: ${colors.text};
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 100;
  line-height: 2rem;
  margin: 0 1rem;
  text-align: center;
  text-decoration: none;
`
