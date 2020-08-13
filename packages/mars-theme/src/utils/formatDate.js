export const formatDatePost = (lang, valueDate) => {
  const date = new Date(valueDate);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  // uk-UA
  const locales = lang === 'ru' ? 'ru' : 'uk';
  const resultDate = `${date.toLocaleDateString(`${locales}-${locales.toLowerCase()}`, options)}`;
  if (lang === 'ru') {
    return `${resultDate.replace(' г.', '')} | ${date.getHours()}:${date.getMinutes()}`;
  }
  return `${resultDate.replace(' р.', '')} | ${date.getHours()}:${date.getMinutes()}`;
};

export const formatDate = (lang, valueDate) => {
  const date = new Date(valueDate);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  };
  const locales = lang === 'ru' ? 'ru' : 'uk';
  const resultDate = `${date.toLocaleDateString(`${locales}-${locales.toLowerCase()}`, options)}, ${date.toLocaleDateString(`${locales}-${locales.toLowerCase()}`, {
    weekday: 'long',
  })}`;

  if (lang === 'ru') {
    return `${resultDate.replace(' г.', '')}`;
  }
  return `${resultDate.replace(' р.', '')}`;
};
