import React from 'react';
import sprite from '../../img/svg/sprite.svg';

const SvgSprite = ({
  className, name, active, ...rest
}) => (
  <svg className={className} {...rest}>
    <use href={`${sprite}#${name}`} />
  </svg>
);

export default SvgSprite;
