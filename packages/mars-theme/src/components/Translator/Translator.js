import React, { useState } from 'react';
import translate from '../../lang';

const Translator = ({ id, html = false }) => {
  const [lang] = useState('uk');
  const json = translate[lang];

  return (
    <>
      { html ? 'return html' : json[id] }
    </>
  );
};

export default Translator;
