import React from 'react';
import {
  TitleBlock,
  Text,
} from './styled';

const Title = ({ children, size = 'default', className }) => (
  <TitleBlock className={className} size={size}>
    <Text>{ children }</Text>
  </TitleBlock>
);

export default Title;
