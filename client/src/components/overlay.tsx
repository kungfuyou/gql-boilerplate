import React from 'react';
import { bool, func, InferProps, string } from 'prop-types';
import styled from '@emotion/styled';
import { colors } from '../styles';

interface IStyledOverlay {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string
}

function Overlay ({ open, setOpen, className = 'overlay' } : InferProps<typeof Overlay.propTypes> ) {
  return (
    <StyledOverlay 
      open={open}
      onClick={() => setOpen(false)}
      className = { className! }
    >
    </StyledOverlay>
  )
}

export default Overlay;

Overlay.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  className: string
};

const StyledOverlay = styled.div<IStyledOverlay>`
  background: ${ props => !props.open  ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'};
  backdrop-filter: url(filters.svg#filter) blur(1.5px)  contrast(200%);
  width: ${ props => !props.open  ? '0' : '100vw' };
  height: ${ props => !props.open  ? '0' : '100%' };
  position: absolute;
  top: 0;
  left: 0;
  visibility: ${ props => !props.open  ? 'none' : 'visible'};
  z-index: 1;
  transition: background 0.4s;
`
