import moment from 'moment';

export const formatDatePost = (lang, valueDate) => {
  // uk-UA
  const locales = lang === 'ru' ? 'ru' : 'uk';

  moment.locale(locales);
  const resultDate = moment(valueDate).utcOffset(3).format("DD MMMM YYYY | HH:mm");

  return `${resultDate}`;
};

export const formatDate = (lang, valueDate) => {
  const locales = lang === 'ru' ? 'ru' : 'uk';
  moment.locale(locales);
  const resultDate = moment(valueDate).utcOffset(3).format("DD MMMM YYYY, dddd");

  return `${resultDate}`;
};

export const formatDatePerson = (lang, valueDate) => {
  // uk-UA
  const locales = lang === 'ru' ? 'ru' : 'uk';
  moment.locale(locales);
  const resultDate = moment(valueDate).utcOffset(3).format("DD MMMM YYYY");

  return `${resultDate}`;
};
