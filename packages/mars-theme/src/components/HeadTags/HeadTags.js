import React, { useState, useEffect } from 'react';
import {
  Global, connect, Head,
} from 'frontity';
import { updateTags } from './utils/updateTags';
import defaultTags from './utils/defaultTags';
import moment from 'moment';

const HeadTags = ({ state, libraries, actions }) => {
  const { urlSeoCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const ldata = libraries.source.parse(state.frontity.url + state.router.link);

  const imageCheck = (url) => {
    return imageUrlCheck(url, urlsWithLocal);
  };

  const checkUrl = (url) => {
    return urlSeoCheck(url, [state.frontity.url, state.frontity.adminUrl], state.frontity.url)
  };

  const { link } = state.router;
  const { lang = 'ru' } = state.theme;
  const dataId = state.source.get(link);
  let data = {};
  let checkOther = false;

  if (state.source[dataId.type] && ldata.route !== '/persona/' && ldata.route !== '/photo/' && ldata.route !== '/video/') {
    data = state.source[dataId.type][dataId.id];
  } else {
    if (dataId.isCategory) {
      data = state.source.category[dataId.id];
    } else {
      checkOther = true;
    }
  }
  const { head_tags: tags = [] } = data;

  let headTagsData = tags;

  if(checkOther){
    headTagsData = defaultTags;
    if(ldata.route === '/persona/') {
      headTagsData[0].content = 'Персоны';
      headTagsData[4].attributes.content = 'Персоны';
    } else if(ldata.route === '/photo/'){
      headTagsData[0].content = 'Фото';
      headTagsData[4].attributes.content = 'Фото';
    } else if(ldata.route === '/video/'){
      headTagsData[0].content = 'Видео';
      headTagsData[4].attributes.content = 'Видео';
    }
    headTagsData[5].attributes.content = state.router.link;
    headTagsData[6].attributes.content = 'Персоны';
    const locales = lang === 'ru' ? 'ru' : 'uk';
    moment.locale(locales);
    const resultDate = moment().utcOffset(3).format('YYYY-MM-DDTHH:mmZ');
    headTagsData[7].attributes.content = resultDate;
    headTagsData[7].attributes.property = 'article:modified_time';
  }

  useEffect(() => {
    if (state.source[dataId.type] && ldata.route !== '/persona/' && ldata.route !== '/photo/' && ldata.route !== '/video/') {
      Object.assign(headTagsData, updateTags(data, lang, checkUrl, imageCheck, state));
      console.log(headTagsData);
    }
  },[])

  return (
    <Head>
      {headTagsData.map(({ tag: Tag, attributes, content }, index) => {
        return (
          <>
            <meta name="google-site-verification" content="CG6dRA9KNCFg7fLu1kFBAxKC7L1VRLrOmaavoyAGHAc" />
            <Tag key={index} {...attributes}>
              {content}
            </Tag>
          </>
        );
      })}
    </Head>
  );
};

export default connect(HeadTags);
