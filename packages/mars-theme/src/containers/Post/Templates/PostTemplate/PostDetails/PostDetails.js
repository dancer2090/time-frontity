import React from 'react';
import {
  Wrapper,
  FlexContainer,
  Category,
  DateValue,
  SharedBlock,
  FlexCenter,
  IconEye,
  IconComments,
  Counter,
  Resources,
  ResourcesImage,
} from './styles';
import Shared from '../../../../../components/Shared';
import urk from '../../../../../img/urk-net.png';

const PostDetails = ({ className, showShared = true, showResources = true }) => (
  <Wrapper className={className}>
    <FlexContainer>
      <Category>
        КУЛЬТУРА
      </Category>
      <DateValue>
        10 сентября 2020 | 12:33
      </DateValue>
      <FlexCenter>
        <IconEye name="eye" />
        <Counter>999</Counter>
      </FlexCenter>
      <FlexCenter>
        <IconComments name="comments" />
        <Counter>999</Counter>
      </FlexCenter>
      {
        showResources && (
          <Resources>
            <ResourcesImage src={urk} />
          </Resources>
        )
      }
      {
        showShared && (
          <SharedBlock>
            <Shared />
          </SharedBlock>
        )
      }
    </FlexContainer>
  </Wrapper>
);

export default PostDetails;
