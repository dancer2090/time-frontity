export const linkReplace = (url, replaces = []) => {
  let newLink = url;
  if (newLink !== '') {
    replaces.forEach((r) => {
      if (url.startsWith(r)) {
        newLink = url.replace(r, '');
      }
    });
  }
  return newLink;
};

export const linkImageReplace = (url = '', replaces = { urlFrom: '', urlTo: '', isLocal: true }) => {
  let newLink = url;
  if (!replaces.isLocal && url.length > 0) {
    newLink = url.replace(replaces.urlFrom, replaces.urlTo);
  }
  return newLink;
};

export const linkSeoReplacer = (url, replaces = [], value) => {
  let newLink = url;
  if (newLink !== '') {
    replaces.forEach((r) => {
      if (url.startsWith(r)) {
        newLink = url.replace(r, value);
      }
    });
  }
  return newLink;
};

export const cutStr = (str='', count=0) => {
  let newStr = str.substr(0,count);
  if(str.length > count) newStr = newStr + '...';
  return newStr;
};

export const popReadyObjectArchive = ( returnObj = [], addObjPost = {}, url = '/', archiveObj = {} ) => {
  const dataPosts = [];
  const infoPosts = {};
  dataPosts[url] = {
    isArchive: true,
    isFetching: false,
    isReady: true,
    items : returnObj,
    link: url,
    next: `${url}/page/2/`,
    page: 1,
    query: {},
    route: url,
    ...archiveObj
  };
  returnObj.forEach((post) => {
    const route = post.link.replace('https://admin.sirinsoftware.com', '');
    dataPosts[route] = {
      id: post.id,
      isFetching: false,
      isReady: false,
      ...addObjPost
    };
    infoPosts[post.id.toString()] = post;
    infoPosts[post.id.toString()].link = post.link.replace('https://admin.sirinsoftware.com', '');
  });
  return {
    data : dataPosts,
    info : infoPosts
  }
}

export const generateCases = (state = {}, ctxCases = []) => {
  const preData = popReadyObjectArchive(
    ctxCases,
    {
      type: "portfolio"
    },
    '/case-studies/',
    {
      isPortfolioArchive: true,
      isPostTypeArchive: true,
      type: "portfolio",
      total: ctxCases.length,
      totalPages: Math.round(ctxCases.length / 10)
    }
  );
  Object.assign(state.source.data, preData.data);
  state.source.portfolio = preData.info;
  state.theme.cases = ctxCases;
}