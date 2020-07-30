import React, { useState } from 'react';

const Translator = ({ id, html = false }) => {
  const [lang] = useState('ua');
  const json = require(`../../lang/${lang}`).default;

  return (
    <>
      { html ? 'return html' : json[id] }
    </>
  );
};

export default Translator;
