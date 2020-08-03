import React, { useState } from 'react';
import { connect } from 'frontity';
import translate from '../../lang';

const Translator = ({ id, html = false, libraries }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;

  const [lang] = useState('uk');
  const json = translate[lang];

  return (
    <>
      { html ? <Html2React html={json[id]} /> : json[id] }
    </>
  );
};

export default connect(Translator);
