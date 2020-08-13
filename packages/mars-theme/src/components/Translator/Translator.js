import React from 'react';
import { connect } from 'frontity';
import translate from '../../lang';

const Translator = ({
  state, id, html = false, libraries,
}) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const json = translate[lang];

  return html ? <Html2React html={json[id]} /> : json[id];
};

export default connect(Translator);
