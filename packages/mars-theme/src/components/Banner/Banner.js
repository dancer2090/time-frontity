import React, { useState } from 'react';
import { connect } from 'frontity';
import {
  BannerContainer,
  BannerImg
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';

const Banner = ({
  width=219,
  height=436,
  link='',
  bannerImg='',
  libraries,
  state,
  isFixed = false,
  right = '0',
}) => {
  const [timeValue, setTimeValue] = useState('');
  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const bImg = (bannerImg !== '' ? bannerImg : cardImg);
  const urlResourse = imageUrlCheck(bannerImg, urlsWithLocal);

  return (
    <BannerContainer isFixed={isFixed} width={width} height={height}>
      <a target='_blank' rel='nofollow' href={link}>
        <BannerImg src={bannerImg} />
      </a>
    </BannerContainer>
  );
};

export default connect(Banner);
