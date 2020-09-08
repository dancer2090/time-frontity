import React, { useState } from 'react';
import { connect } from 'frontity';
import {
  Card,
  FrameBlock,
  Frame,
  Information,
  DateValue,
  Content,
  Resources,
  ResourcesImage,
  VideoButton,
  TimeVideo,
  PhotoCounter,
  PhotoIcon,
  PhotoCounterValue,
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';
import ukrNet from '../../img/urk-net.png';
import videoPlay from '../../img/svg/play-btn.svg';
import { getTimeVideo } from '../../utils/youtubeFormated';

const NewsCard = ({
  type = '',
  showResource = false,
  className,
  state,
  libraries,
  item = {},
  linkVideo = '',
  time = '',
}) => {
  const [timeValue, setTimeValue] = useState('');
  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlResourse = imageUrlCheck(ukrNet, urlsWithLocal);
  const {
    _embedded: itemEmbed = {},
    link: itemLink = '',
    acf: itemAcf = {},
    date: itemDate = '',
  } = item;
  const {
    featured_image: itemImage = { url: '' },
  } = itemEmbed;
  const newsImage = (itemImage.url ? itemImage.url : cardImg);
  const {
    uk: itemUk = { title: '', content: '' },
    ru: itemRu = { title: '', content: '' },
  } = itemAcf;
  const itemMeta = {
    uk: itemUk,
    ru: itemRu,
  };

  const months = {
    ru: [
      'января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря',
    ],
    uk: [
      'січні', 'лютий', 'март',
      'апрель', 'травня', 'червня',
      'липні', 'серпня', 'вересня',
      'жовтня', 'листопаді', 'грудня',
    ],
  };

  const date = new Date(itemDate.replace(/\s/, 'T'));
  const monthDay = date.getDate();
  const month = date.getMonth() + 1;
  const mothValue = months[state.theme.lang][month - 1];
  const strDate = `${monthDay} ${mothValue} ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;
  getTimeVideo(time).then((data) => {
    setTimeValue(data);
  });

  let counterImages = 0;
  if (type === 'photo') {
    const { images = [] } = itemAcf;
    counterImages = images.length;
  }

  return (
    <Card className={className}>
      <FrameBlock>
        {
          type === 'video' && (
            <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])}>
              <Frame src={linkVideo} />
              <VideoButton src={videoPlay} />
              <TimeVideo>
                { timeValue }
              </TimeVideo>
            </Link>
          )
        }
        {
          type === 'photo' && (
            <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])}>
              <Frame
                src={counterImages > 0
                  ? imageUrlCheck(itemAcf.images[0].image.url, urlsWithLocal)
                  : cardImg}
              />
              <PhotoCounter>
                <PhotoIcon name="photo" />
                <PhotoCounterValue>
                  { counterImages }
                </PhotoCounterValue>
              </PhotoCounter>
            </Link>
          )
        }
        {
          type === '' && (
            <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])}>
              <Frame src={newsImage} />
            </Link>
          )
        }
      </FrameBlock>
      <Content>
        <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])}>
          {itemMeta[state.theme.lang].title}
        </Link>
        <Information>
          <DateValue>
            {strDate}
          </DateValue>
          {
            showResource && (
              <Resources href="#" target="__blank">
                <ResourcesImage src={urlResourse} />
              </Resources>
            )
          }
        </Information>
      </Content>
    </Card>
  );
};

export default connect(NewsCard);
