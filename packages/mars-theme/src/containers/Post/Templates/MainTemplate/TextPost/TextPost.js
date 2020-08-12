import React from 'react';
import { connect } from 'frontity';
import {
  Post,
} from './styles';
import Link from '../../../../../components/link';

const TextPost = ({ state, className, item }) => {
  const {
    _embedded : itemEmbed = {},
    link : itemLink = "",
    acf : itemAcf = {},
    date : itemDate = "",
  } = item;
  const {
    author : itemAuthor = []
  } = itemEmbed;
  const {
    name : itemAuthorName = ""
  } = itemAuthor[0];
  const {
    uk : itemUk = { title : "", content : "" },
    ru : itemRu = { title : "", content : "" },
  } = itemAcf;
  const itemMeta = {
    'uk' : itemUk,
    'ru' : itemRu,
  };

  return (
    <Post className={className}>
      <Link link={itemLink} className="post-name">
        {itemMeta[state.theme.lang].title}
      </Link>
      <Link link="#" className="post-author">
        { itemAuthorName }
      </Link>
    </Post>
  )
};

export default connect(TextPost);
