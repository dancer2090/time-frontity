import React from 'react';
import sprite from '../../img/svg/sprite.svg';

const SvgSprite = (props) => {
  const { className, name } = props;
  return (
    <svg className={className} {...props}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default SvgSprite;
