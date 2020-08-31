import React from 'react';
import { connect } from 'frontity';
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
import Shared from '../Shared';
import urk from '../../img/urk-net.png';

const PostDetails = ({
  className,
  showShared = true,
  showResources = true,
  date = '',
  category = '',
  state,
  eyeCount = '0',
}) => {
  const fullPostUrl = `${state.frontity.url}${state.router.link}`;

  return (
    <Wrapper className={className}>
      <FlexContainer showShared={showShared}>
        { category !== '' && (
          <Category>
            { category }
          </Category>
        ) }
        <DateValue>
          { date }
        </DateValue>
        { eyeCount > 0 && (
        <FlexCenter>
          <IconEye name="eye" />
          <Counter>{ eyeCount }</Counter>
        </FlexCenter>
        ) }
        { state.theme.commentsLength > 0 && (
          <FlexCenter>
            <IconComments name="comments" />
            <Counter>
              { state.theme.commentsLength }
            </Counter>
          </FlexCenter>
        ) }
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
              <Shared link={fullPostUrl} />
            </SharedBlock>
          )
        }
      </FlexContainer>
    </Wrapper>
  );
};

export default connect(PostDetails);
