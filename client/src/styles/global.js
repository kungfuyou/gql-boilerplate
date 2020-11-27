import React from 'react';
import { Global, css } from '@emotion/core';
import { colors } from './index';

export const GlobalStyles = () => {
  return (
    <Global 
      styles={ css`
      html, body {
        height: 100%;
      }

      html {
        font-size: 10px;
      }

      body {
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
        font-family: monospace, sans-serif;
        background-color: ${colors.background};
        color: ${colors.text};
      }

      #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
      }

      * {
        box-sizing: border-box;
      }

      h1, h2, h3, h4, h5, h6 {
        margin: 1rem 0;
        font-weight: 100;
      }

      h1 {
        font-size: 2.8rem;
        line-height: 1;
      }

      h2 {
        font-size: 2.6rem;
      }

      h3 {
        font-size: 2rem;
      }

      h5 {
        font-size: 1.6rem;
      }
      `}
    />
  );
}
