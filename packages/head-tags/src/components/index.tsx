import React from "react";
import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import HeadTagsPackage from "../../types";
import { createMetaTag } from '../utils/createMetaTag';

// Render all head tags from the current entity.
const Root: React.FC<Connect<HeadTagsPackage>> = ({ state }) => {
  // Get current link.
  const { link } = state.router;
  let { lang = 'ru' } = state.theme;
  const { transformLinks } = state.headTags;

  // Get the head tags for that link.
  console.log(state);
  const dataId = state.source.get(link);
  const data = state.source[dataId.type][dataId.id];
  const { head_tags: headTagsData = [] } = data;
  console.log(headTagsData);

  const headTags = React.useMemo(() => headTagsData, [
    state.frontity.url,
    state.router.link,
    state.source.api,
    transformLinks,
    transformLinks && transformLinks.base,
    transformLinks && transformLinks.ignore
  ]);

  // Render all tags inside <head>.
  return (
    <Head>
      {headTags.map(({ tag: Tag, attributes, content }, index) => {
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
