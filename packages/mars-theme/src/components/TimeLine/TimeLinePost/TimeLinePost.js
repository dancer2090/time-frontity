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
  const { urlCheck } = libraries.func;
  const { lang = 'ru' } = state.theme;
  const { acf = {} } = postContent;
  const { title = '' } = acf[lang];
  const { link = '' } = postContent;
  const linkValue = urlCheck(link, [state.frontity.url, state.frontity.adminUrl]);
  console.log(linkValue);
  return (
    <Post>
      <Link link={linkValue}>
        <Category>
          { postContent.category }
        </Category>
        <Text>
          <Html2React html={title} />
        </Text>
      </Link>
    </Post>
  );
};

export default connect(TimeLinePost);
