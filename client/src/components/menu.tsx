import React from 'react';
import { bool, func, InferProps } from 'prop-types';
import { LogoutButton } from '.';
import { Overlay } from '.' 
import styled from '@emotion/styled';
import { breakpoints } from '../styles';

interface IStyledMenu {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Menu({open, setOpen}: InferProps<typeof Menu.propTypes>) {
  console.log('open', open);
  console.log('setOpen', setOpen);

  return (
    <React.Fragment>
      <StyledMenu
        open={open}
      >
        <ul>
          <li>{ open ? `${ open }: im open` : `${ open }: im closed` }</li>
          <li>Home</li>
        </ul>
      </StyledMenu>
      <Overlay open={ open } setOpen={ setOpen } />
     </React.Fragment>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired
};

export default Menu;

const StyledMenu = styled.nav<IStyledMenu>`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 2;
`
