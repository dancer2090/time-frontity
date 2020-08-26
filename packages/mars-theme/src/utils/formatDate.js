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
  const minute = date.getMinutes();
  if (lang === 'ru') {
    return `${resultDate.replace(' г.', '')} | ${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`;
  }
  return `${resultDate.replace(' р.', '')} | ${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`;
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
