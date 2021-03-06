import React, { useState, useEffect } from 'react';
import {
  Global, connect, Head, decode
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
  if (state.source[dataId.type] && dataId.isReady && !dataId.isCategory && !dataId.isTaxonomy && !dataId.isArchive && ldata.route !== '/persona/' && ldata.route !== '/photo/' && ldata.route !== '/video/') {
    data = state.source[dataId.type][dataId.id];
  } else {
    if (dataId.isCategory) {
      data = state.source.category[dataId.id];
    } else {
      checkOther = true;
    }
  }

  let tags = [];
  if(data && data.head_tags){
    const { head_tags: tagsOld = [] } = data;
    if(tagsOld.length > 0) tags = tagsOld;
  }

  let headTagsData = tags;

  if(checkOther){
    headTagsData = defaultTags;
    if(ldata.route === '/persona/') {
      headTagsData[0].content = lang === 'ru' ? `Персоны - ${state.frontity.title}` : `Персони - ${state.frontity.title}`;
      headTagsData[4].attributes.content = `Персоны - ${state.frontity.title}`;
    } else if(ldata.route === '/images/'){
      headTagsData[0].content = lang === 'ru' ? `Фото - ${state.frontity.title}` : `Фото - ${state.frontity.title}`;
      headTagsData[4].attributes.content = `Фото - ${state.frontity.title}`;
    } else if(ldata.route === '/video/'){
      headTagsData[0].content = lang === 'ru' ? `Время ТВ - ${state.frontity.title}` : `Час ТВ - ${state.frontity.title}`;
      headTagsData[4].attributes.content = 'Видео';
    }
    headTagsData[5].attributes.content = state.router.link;
    headTagsData[6].attributes.content = 'Time';
    const locales = lang === 'ru' ? 'ru' : 'uk';
    moment.locale(locales);
    const resultDate = moment().format('YYYY-MM-DDTHH:mmZ');
    headTagsData[7].attributes.content = resultDate;
    headTagsData[7].attributes.property = 'article:modified_time';
  }
  const getParams = libraries.source.parse(state.router.link);
  if(getParams.query && getParams.query.p) headTagsData[1].attributes.content = "noindex";

  const {
    acf = {},
  } = data;
  const {
    ru = { description : '' },
    uk = { description : '' }
  } = acf;
  const descriptionText = lang === 'ru' ? ru.description : uk.description;
  const metaDescription = {
    tag: 'meta',
    attributes: {
      name: 'description',
      content: descriptionText
    }
  };

  useEffect(() => {
    if (state.source[dataId.type] && ldata.route !== '/persona/' && ldata.route !== '/photo/' && ldata.route !== '/video/') {
      Object.assign(headTagsData, updateTags(data, lang, checkUrl, imageCheck, state, dataId, decode), {20: metaDescription});
      if(descriptionText && descriptionText.length > 0) Object.assign(headTagsData, {20: metaDescription});
    }
  },[])
  return (
    <Head>
      <meta name="google-site-verification" content="CG6dRA9KNCFg7fLu1kFBAxKC7L1VRLrOmaavoyAGHAc" />
      {headTagsData.map(({ tag: Tag, attributes, content }, index) => {
        return (
          <Tag key={`${Tag}-${index}`} {...attributes}>
            {content}
          </Tag>
        );
      })}
    </Head>
  );
};

export default connect(HeadTags);
