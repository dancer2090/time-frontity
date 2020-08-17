import { css, styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_DESCTOP_SMALL, SIZE_LAPTOP_SMALL } from '../const/responsive';

export const globalStyles = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  } 
  
  input, textarea {
    outline: none;
    
    &:focus {
      outline: none;
    }
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  body {
    font-family: 'Montserrat', sans-serif;
    background: #E5E5E5;
    
    &.ReactModal__Body--open {
      overflow: hidden;
    }
  }
  
  #rc-anchor-container {
    display: none !important;
  }
  .grecaptcha-badge { visibility: hidden; }
`;

export const Main = styled.div`
  background-color: #E5E5E5;
  position: relative;
  min-height: 400px;
`;

export const Container = styled.div`
  max-width: 1041px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${SIZE_DESCTOP_SMALL}px) {
    max-width: 960px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP}px) {
    max-width: 728px;
  }

  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
    max-width: 100%;
  }
`;
