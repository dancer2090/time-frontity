import React from 'react';
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
} from './styled';
import Link from '../link';
import cardImg from '../../img/card.jpg';
import ukrNet from '../../img/urk-net.png';

const NewsCard = ({ className, state, libraries, item={} }) => {
  const { urlCheck } = libraries.func;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(cardImg, urlsWithLocal);
  const urlResourse = imageUrlCheck(ukrNet, urlsWithLocal);
  const {
    _embedded : itemEmbed = {},
    link : itemLink = "",
    acf : itemAcf = {},
    date : itemDate = "",
  } = item;
  const {
    featured_image : itemImage = { url : "" }
  } = itemEmbed;
  const {
    uk : itemUk = { title : "", content : "" },
    ru : itemRu = { title : "", content : "" },
  } = itemAcf;
  const itemMeta = {
    'uk' : itemUk,
    'ru' : itemRu,
  };

  const months = {
    ru : [
      'января', 'февраля', 'марта',
      'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября',
      'октября', 'ноября', 'декабря'
    ],
    uk : [
      'січні', 'лютий', 'март',
      'апрель', 'травня', 'червня',
      'липні', 'серпня', 'вересня',
      'жовтня', 'листопаді', 'грудня'
    ]
  };

  const date = new Date(itemDate);
  const monthDay = date.getDate();
  const month = date.getMonth() + 1;
  const mothValue = months[state.theme.lang][month - 1];

  const strDate = `${monthDay} ${mothValue} ${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}`;

  return (
    <Card className={className}>
      <FrameBlock>
        <Frame src={itemImage.url} />
      </FrameBlock>
      <Content>
        <Link link={urlCheck(itemLink, [state.frontity.url, state.frontity.adminUrl])}>
          {itemMeta[state.theme.lang].title}
        </Link>
        <Information>
          <DateValue>
            {strDate}
          </DateValue>
          <Resources href="#" target="__blank">
            <ResourcesImage src={urlResourse} />
          </Resources>
        </Information>
      </Content>
    </Card>
  );
};

export default connect(NewsCard);
