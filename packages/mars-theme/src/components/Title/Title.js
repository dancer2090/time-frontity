import React from 'react';
import {
  TitleBlock,
  Text,
} from './styled';

const Title = ({ className, children, size = 'default' }) => (
  <TitleBlock className={className} size={size}>
    <Text>{ children }</Text>
  </TitleBlock>
);

export default Title;
