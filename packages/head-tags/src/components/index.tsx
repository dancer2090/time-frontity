import React, { useState, useEffect } from "react";
import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import HeadTagsPackage from "../../types";
import { createMetaTag } from '../utils/createMetaTag';

// Render all head tags from the current entity.
const Root: React.FC<Connect<HeadTagsPackage>> = ({ state, libraries }) => {
  const { urlSeoCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const imageCheck = (url) => {
    return imageUrlCheck(url, urlsWithLocal);
  };

  const checkUrl = (url) => {
    return urlSeoCheck(url, [state.frontity.url, state.frontity.adminUrl], state.frontity.url)
  };
  // Get current link.
  const { link } = state.router;
  const { lang = 'ru' } = state.theme;
  const { transformLinks } = state.headTags;

  // Get the head tags for that link.
  const resultTags = React.useMemo(() => {
    let headTagsData = []
    const dataId = state.source.get(link);
    if (state.source[dataId.type]) {
      const data = state.source[dataId.type][dataId.id];
      headTagsData = createMetaTag(data, lang, checkUrl, imageCheck, state);
      console.log(state.headTags.get(link));
    } else {
      if (dataId.isCategory) {
        const data = state.source.category[dataId.id];
        headTagsData = createMetaTag(data, lang, checkUrl, imageCheck, state);
      }
    }

    return headTagsData;
  }, [
      state.router.link,
      state.theme.lang,
      state.frontity.url,
      state.source.api,
      transformLinks,
      transformLinks && transformLinks.base,
      transformLinks && transformLinks.ignore,
  ]);

  // Render all tags inside <head>.
  return (
    <Head>
      {resultTags.map(({ tag: Tag, attributes, content }, index) => {
        return (
          <Tag key={index} {...attributes}>
            {content}
          </Tag>
        );
      })}
    </Head>
  );
};

export default connect(Root);
