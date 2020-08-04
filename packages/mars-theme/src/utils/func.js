export const linkReplace = (url, replaces = []) => {
  let newLink = url;
  replaces.forEach((r) => {
    if (url.startsWith(r)) {
      newLink = url.replace(r, '');
    }
  });
  return newLink;
};

export const linkImageReplace = (url = '', replaces = { urlFrom: '', urlTo: '', isLocal: true }) => {
  let newLink = url;
  if (!replaces.isLocal && url.length > 0) {
    newLink = url.replace(replaces.urlFrom, replaces.urlTo);
  }
  return newLink;
};
