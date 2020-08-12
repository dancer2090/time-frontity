/* eslint-disable no-param-reassign */

const imageUrl = {
  // We can add a name to identify it later.
  name: 'imageUrl',

  // We can add a priority so it executes before or after other processors.
  priority: 8,

  // Only process the node it if it's an image.
  test: ({ node }) => node.component === 'img',
  ignore: true,
  processor: ({ node, state }) => {
    const reg = new RegExp(state.frontity.adminUrl, 'g');
    /*
    if (!state.frontity.isLocal) {
      node.props.src = node.props.src.replace(reg, state.frontity.url);
      node.props.srcSet = node.props.srcSet.replace(reg, state.frontity.url);
    }*/
    return node;
  },
};

export default imageUrl;
