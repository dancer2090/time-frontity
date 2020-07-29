/* eslint-disable no-param-reassign */
import React from 'react';
import Link from '../components/link';

const LinkReplace = (props) => <Link {...props} />;

const linkUrls = {
  // We can add a name to identify it later.
  name: 'linkUrls',
  // We can add a priority so it executes before or after other processors.
  priority: 8,
  // Only process the node it if it's an image.
  test: ({ node, state }) => node.component === 'a' && node.props.href.indexOf(state.frontity.adminUrl) !== -1,
  processor: ({ node, state }) => {
    const link = node.props.href.replace(state.frontity.adminUrl, state.frontity.url);
    if (!node.props['data-lightbox']) {
      node.props.link = link;
      node.component = LinkReplace;
    }
    return node;
  },
};

export default linkUrls;
