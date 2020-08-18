import React, { useState, useEffect } from "react";
import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import HeadTagsPackage from "../../types";
import { createMetaTag } from '../utils/createMetaTag';

// Render all head tags from the current entity.
const Root: React.FC<Connect<HeadTagsPackage>> = ({ state, libraries }) => {
  console.log(state);
  const [headTagsData, setHeadTagsData] = useState([]);
  const { urlSeoCheck } = libraries.func;
  const checkUrl = (url) => {
    return urlSeoCheck(url, [state.frontity.url, state.frontity.adminUrl], state.frontity.url)
  };
  // Get current link.
  const { link } = state.router;
  const { lang = 'ru' } = state.theme;
  const { transformLinks } = state.headTags;

  // Get the head tags for that link.
  useEffect(() => {
    const dataId = state.source.get(link);
    if (state.source[dataId.type]) {
      const data = state.source[dataId.type][dataId.id];
      const result = createMetaTag(data, lang, checkUrl);
      setHeadTagsData(result);
    } else {
      if (dataId.isCategory) {
        const data = state.source.category[dataId.id];
        const result = createMetaTag(data, lang, checkUrl);
        setHeadTagsData(result);
      }
    }
  }, [
    state.frontity.url,
    state.router.link,
    state.source.api,
    state.theme.lang,
    transformLinks,
    transformLinks && transformLinks.base,
    transformLinks && transformLinks.ignore,
  ]);

  // Render all tags inside <head>.
  return (
    <Head>
      {headTagsData.map(({ tag: Tag, attributes, content }, index) => {
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
