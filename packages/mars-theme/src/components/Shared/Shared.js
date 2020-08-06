import React from 'react';
import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';
import { SIZE_LAPTOP_SMALL } from '../../const/responsive';

const Icon = styled(SvgSprite)`
  fill: #666;
  width: 18px;
  height: 20px;
  
  @media screen and (max-width: ${SIZE_LAPTOP_SMALL}px) {
   width: 16px;
   height: 18px;
  }
`;

const Shared = () => (
  <Icon name="shared" />
);

export default Shared;
