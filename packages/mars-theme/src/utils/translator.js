import translate from '../lang';

export const translator = (lang = 'ru', id) => {
  const json = translate[lang];

  return json[id];
};
