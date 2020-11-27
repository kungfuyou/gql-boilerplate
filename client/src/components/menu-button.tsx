import React from 'react';
import { bool, func, InferProps, string } from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '../styles';

interface IStyledBurger {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function MenuButton ({ open, setOpen } : InferProps<typeof MenuButton.propTypes> ) {
  return (
    <StyledBurger 
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default MenuButton;

MenuButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  className: string
};

const StyledBurger = styled.button<IStyledBurger>`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 2.3rem;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  width: 2.3rem;

  &:focus {
    outline: none;
  }

  div {
    background: ${colors.text};
    border-radius: 1rem;
    height: 0.3rem;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    width: 100%;

    :first-of-type {
      transform: ${props => !props.open ? 'rotate(0)' : 'rotate(45deg)  translate3d(2px, -1px, 0)'};
    }

    :nth-of-type(2) {
      opacity: ${props => !props.open ? '1' : '0'};
      transform:${props => !props.open ? 'translateX(0)' : 'translateX(-20px)' };
    }

    :nth-of-type(3) {
      transform: ${props => !props.open ? 'rotate(0)' : 'rotate(-45deg) translate3d(2px, 2px, 0)'};
    }
  }
`
