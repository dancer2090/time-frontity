import React from 'react';
import {
  Post,
  Category,
  Text,
} from './styled';
import Link from '../../link';

const TimeLinePost = ({ postContent = {} }) => (
  <Post>
    <Link link="#">
      <Category>
        { postContent.category }
      </Category>
      <Text>
        { postContent.text }
      </Text>
    </Link>
  </Post>
);

export default TimeLinePost;
