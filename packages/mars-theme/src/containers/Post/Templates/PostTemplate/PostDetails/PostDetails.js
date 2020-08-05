import React from 'react';
import {
  Wrapper,
  TextContainer,
  Category,
  DateValue,
  RightContainer,
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
    <TextContainer>
      <Category>
        КУЛЬТУРА
      </Category>
      <DateValue>
        10 сентября 2020 | 12:33
      </DateValue>
    </TextContainer>
    <RightContainer>
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
    </RightContainer>
    {
      showShared && (
      <SharedBlock>
        <Shared />
      </SharedBlock>
      )
    }
  </Wrapper>
);

export default PostDetails;
