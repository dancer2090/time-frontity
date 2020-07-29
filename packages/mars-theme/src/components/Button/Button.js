import React from 'react';
import { styled, css } from 'frontity';
import {
  SIZE_DESCTOP_MEDIUM_2,
  SIZE_DESCTOP_MEDIUM_1,
  getPxSize,
} from '../../const/responsive';

const StyledButton = styled.button`
  border: none;
  cursor: pointer;  
  width: 180px;
  height: 40px;
  background: linear-gradient(274.43deg, #FFB03A 3.6% , #FF9233 97.69%);
  font-style: normal;
  font-weight: 800;
  font-size: 14 px;
  color: #FFFFFF;
  outline: none;
  transition: all 0.5s ease-out;
  position: relative;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);

  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {
    
  }
  @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
   
  }

  ${(props) => props.size === 'large' && css`
    
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_2)}) {

    }
    @media (max-width: ${getPxSize(SIZE_DESCTOP_MEDIUM_1)}) {
      
    }
  `}

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: rgba(0,0,0,1);
    pointer-events: none;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }
  &:hover {
    &:after {
      opacity: 0.1;
    }
  }

`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
