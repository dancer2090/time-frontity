import React from "react";
import { connect, Head } from "frontity";
import { Connect } from "frontity/types";
import HeadTagsPackage from "../../types";
import { createMetaTag } from '../utils/createMetaTag';

// Render all head tags from the current entity.
const Root: React.FC<Connect<HeadTagsPackage>> = ({ state }) => {
  console.log('tags', state);
  console.log('end console state');
  // Get current link.
  const { link } = state.router;
  const { lang = 'ru' } = state.theme;
  const { transformLinks } = state.headTags;

  // Get the head tags for that link.
  const templateHeadTags = state.headTags.get(link);
  let resultArrayMeta = [...templateHeadTags];

  if (state.headTags.get(link).length > 0) {
    const data = state.source.get(link);
    if (data.isPostType) {
      const post = state.source[data.type][data.id];
      const {
        acf = {}
      } = post;
      const result = createMetaTag(acf[lang]);
      resultArrayMeta = templateHeadTags.concat(result);
    } else if (data.isCategory) {
      const category = state.source.category[data.id];
      const {
        acf = {}
      } = category;

      const result = createMetaTag(acf[lang]);
      resultArrayMeta = templateHeadTags.concat(result);
    }
  }

  const headTags = React.useMemo(() => resultArrayMeta, [
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
