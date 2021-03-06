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
  const { urlCheck, cutStr } = libraries.func;
  const { lang = 'ru' } = state.theme;
  const {
    acf = {},
    link = '',
  } = postContent;

  if (!acf[lang]) return;

  const { title = '' } = acf[lang];
  const { category = {} } = postContent._embedded;
  const { acf: acfCategory = {} } = category;
  let titleCategory = '';
  if (acfCategory) {
    // eslint-disable-next-line no-prototype-builtins
    const copyAcfCategory = Object.assign({}, acfCategory[lang]);
    if (acfCategory[lang] && copyAcfCategory.hasOwnProperty('title')) {
      titleCategory = acfCategory[lang].title;
    }
  }
  const linkValue = urlCheck(link, [state.frontity.url, state.frontity.adminUrl]);
  const hasService = linkValue.includes('censor');

  return (
    <Post>
      {
        hasService
          ? (
            <a target="_blank" href={linkValue}>
              <Category>
                { titleCategory }
              </Category>
              <Text>
                <Html2React html={cutStr(title,75)} />
              </Text>
            </a>
          )
          : (
            <Link link={linkValue}>
              <Category>
                { titleCategory }
              </Category>
              <Text>
                <Html2React html={cutStr(title,75)} />
              </Text>
            </Link>
          )
      }
    </Post>
  );
};

export default connect(TimeLinePost);
