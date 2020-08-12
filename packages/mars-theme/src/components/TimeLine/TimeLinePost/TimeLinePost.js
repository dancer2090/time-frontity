import React from 'react';
import { connect } from 'frontity';
import {
  Post,
  Category,
  Text,
} from './styled';
import Link from '../../link';

const TimeLinePost = ({ postContent = {}, libraries, state }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const { acf = {} } = postContent;

  return (
    <Post>
      <Link link="#">
        <Category>
          { postContent.category }
        </Category>
        <Text>
          123123123
        </Text>
      </Link>
    </Post>
  );
};

export default connect(TimeLinePost);
