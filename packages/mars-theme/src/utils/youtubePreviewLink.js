export const generatePreviewYoutubeLink = (url) => {
  const linkArray = url.split('?v=');
  if (linkArray.length === 0 || linkArray.length === 1) {
    return '';
  }

  const id = linkArray[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
