import React from 'react';
import {
  TitleBlock,
  Text,
} from './styled';

const TitleDiv = ({
  className, children, size = 'default', upperCase = false,
}) => (
  <TitleBlock className={className} size={size} upperCase={upperCase}>
    <Text>{ children }</Text>
  </TitleBlock>
);

export default TitleDiv;
