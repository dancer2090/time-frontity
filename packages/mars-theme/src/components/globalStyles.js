import { css, styled } from 'frontity';
import { SIZE_LAPTOP, SIZE_DESCTOP_SMALL, SIZE_LAPTOP_SMALL } from '../const/responsive';

import MBoE from '../fonts/Montserrat-Bold.eot';
import MBoS from '../fonts/Montserrat-Bold.svg';
import MBoT from '../fonts/Montserrat-Bold.ttf';
import MBoW from '../fonts/Montserrat-Bold.woff';
import MBoW2 from '../fonts/Montserrat-Bold.woff2';

import MBoIE from '../fonts/Montserrat-BoldItalic.eot';
import MBoIS from '../fonts/Montserrat-BoldItalic.svg';
import MBoIT from '../fonts/Montserrat-BoldItalic.ttf';
import MBoIW from '../fonts/Montserrat-BoldItalic.woff';
import MBoIW2 from '../fonts/Montserrat-BoldItalic.woff2';

import MIE from '../fonts/Montserrat-Italic.eot';
import MIS from '../fonts/Montserrat-Italic.svg';
import MIT from '../fonts/Montserrat-Italic.ttf';
import MIW from '../fonts/Montserrat-Italic.woff';
import MIW2 from '../fonts/Montserrat-Italic.woff2';

import MME from '../fonts/Montserrat-Medium.eot';
import MMS from '../fonts/Montserrat-Medium.svg';
import MMT from '../fonts/Montserrat-Medium.ttf';
import MMW from '../fonts/Montserrat-Medium.woff';
import MMW2 from '../fonts/Montserrat-Medium.woff2';

import MMIE from '../fonts/Montserrat-MediumItalic.eot';
import MMIS from '../fonts/Montserrat-MediumItalic.svg';
import MMIT from '../fonts/Montserrat-MediumItalic.ttf';
import MMIW from '../fonts/Montserrat-MediumItalic.woff';
import MMIW2 from '../fonts/Montserrat-MediumItalic.woff2';

import MRE from '../fonts/Montserrat-Regular.eot';
import MRS from '../fonts/Montserrat-Regular.svg';
import MRT from '../fonts/Montserrat-Regular.ttf';
import MRW from '../fonts/Montserrat-Regular.woff';
import MRW2 from '../fonts/Montserrat-Regular.woff2';

import MSBE from '../fonts/Montserrat-SemiBold.eot';
import MSBS from '../fonts/Montserrat-SemiBold.svg';
import MSBT from '../fonts/Montserrat-SemiBold.ttf';
import MSBW from '../fonts/Montserrat-SemiBold.woff';
import MSBW2 from '../fonts/Montserrat-SemiBold.woff2';

import MSBIE from '../fonts/Montserrat-SemiBoldItalic.eot';
import MSBIS from '../fonts/Montserrat-SemiBoldItalic.svg';
import MSBIT from '../fonts/Montserrat-SemiBoldItalic.ttf';
import MSBIW from '../fonts/Montserrat-SemiBoldItalic.woff';
import MSBIW2 from '../fonts/Montserrat-SemiBoldItalic.woff2';

import NS from '../fonts/NotoSans-Regular.eot';
import NSS from '../fonts/NotoSans.svg';
import NST from '../fonts/NotoSans.ttf';
import NSW from '../fonts/NotoSans.woff';
import NSW2 from '../fonts/NotoSans-Regular.woff2';

export const globalStyles = css`

@font-face {
  font-family: 'Montserrat';
  src: url('${MBoE}');
  src: url('${MBoE}?#iefix') format('embedded-opentype'),
       url('${MBoS}#Montserrat-Bold') format('svg'),
       url('${MBoT}') format('truetype'),
       url('${MBoW}') format('woff'),
       url('${MBoW2}') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MBoIE}');
  src: url('${MBoIE}?#iefix') format('embedded-opentype'),
       url('${MBoIS}#Montserrat-BoldItalic') format('svg'),
       url('${MBoIT}') format('truetype'),
       url('${MBoIW}') format('woff'),
       url('${MBoIW2}') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MIE}');
  src: url('${MIE}') format('embedded-opentype'),
       url('${MIS}#Montserrat-Italic') format('svg'),
       url('${MIT}') format('truetype'),
       url('${MIW}') format('woff'),
       url('${MIW2}') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MME}');
  src: url('${MME}?#iefix') format('embedded-opentype'),
       url('${MMS}#Montserrat-Medium') format('svg'),
       url('${MMT}') format('truetype'),
       url('${MMW}') format('woff'),
       url('${MMW2}') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MMIE}');
  src: url('${MMIE}?#iefix') format('embedded-opentype'),
       url('${MMIS}#Montserrat-MediumItalic') format('svg'),
       url('${MMIT}') format('truetype'),
       url('${MMIW}') format('woff'),
       url('${MMIW2}') format('woff2');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MRE}');
  src: url('${MRE}?#iefix') format('embedded-opentype'),
       url('${MRS}#Montserrat-Regular') format('svg'),
       url('${MRT}') format('truetype'),
       url('${MRW}') format('woff'),
       url('${MRW2}') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MSBE}');
  src: url('${MSBE}?#iefix') format('embedded-opentype'),
       url('${MSBS}#Montserrat-SemiBold') format('svg'),
       url('${MSBT}') format('truetype'),
       url('${MSBW}') format('woff'),
       url('${MSBW2}') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Montserrat';
  src: url('${MSBIE}');
  src: url('${MSBIE}?#iefix') format('embedded-opentype'),
       url('${MSBIS}#Montserrat-SemiBoldItalic') format('svg'),
       url('${MSBIT}') format('truetype'),
       url('${MSBIW}') format('woff'),
       url('${MSBIW2}') format('woff2');
  font-weight: 600;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Noto Sans';
  src: url('${NS}');
  src: url('${NS}?#iefix') format('embedded-opentype'),
       url('${NSW2}') format('woff2'),
       url('${NSS}#NotoSans') format('svg'),
       url('${NST}') format('truetype'),
       url('${NSW}') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

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

  @keyframes MuiSkeleton-keyframes-pulse{
    0%{opacity:1}
    50%{opacity:.4}
    100%{opacity:1}
  }

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
