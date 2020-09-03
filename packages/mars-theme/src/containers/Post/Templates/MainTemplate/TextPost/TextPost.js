import React from 'react';
import { connect } from 'frontity';
import {
  Post,
} from './styles';
import Link from '../../../../../components/link';

const TextPost = ({ state, className, item, libraries }) => {
  const { urlCheck } = libraries.func;
  const {
    _embedded : itemEmbed = {},
    link : itemLink = "",
    acf : itemAcf = {},
    date : itemDate = "",
  } = item;
  const {
    uk : itemUk = { title : "", content : "" },
    ru : itemRu = { title : "", content : "" },
  } = itemAcf;
  const itemMeta = {
    'uk' : itemUk,
    'ru' : itemRu,
  };
  const {
    author_alt : authorAlt = {}
  } = itemEmbed;
  const {
    acf : authorAcf = {},
    link : authorLink = '',
  } = authorAlt;

  return (
    <Post className={className}>
      <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])} className="post-name">
        {itemMeta[state.theme.lang].title}
      </Link>
      { authorAlt && authorAlt !== {} && authorAcf && authorAcf !== {} && (
        <Link link={authorLink} className="post-author">
          { authorAcf[state.theme.lang].title }
        </Link>
      )}
    </Post>
  )
};

export default connect(TextPost);
