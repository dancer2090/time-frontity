import React from 'react';
import { styled } from 'frontity';
import SvgSprite from '../SvgSprite';

const Icon = styled(SvgSprite)`
  fill: #666;
  width: 18px;
  height: 20px;
`;

const Shared = () => (
  <Icon name="shared" />
);

export default Shared;
