import React from 'react';
import { connect } from 'frontity';
import {
  Card,
  FrameBlock,
  Frame,
  Content,
  ContentBlock,
  Title,
  Text,
  DateBlock,
} from './styles';
import Link from "../link";
import pic from '../../img/pic.jpg';
import cardImg from '../../img/card.jpg';
import { formatDatePerson } from '../../utils/formatDate';

const PersonCard = ({
  personData = {},
  direction = 'row',
  sizeText = 'medium',
  verticalSmall = false,
  state,
  libraries,
}) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { imageUrlCheck } = libraries.func;
  const { urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const { lang = 'ru' } = state.theme;
  const {
    acf = {
      uk: {},
      ru: {},
    },
    date = '',
    link = '#',
    _embedded = {},
  } = personData;
  const {
    name = '',
    description = '',
    title = '',
  } = acf[lang];
  let mediaUrl = cardImg;
  if (_embedded.featured_image.url) {
    mediaUrl = _embedded.featured_image.url;
  }
  const card_title = (name !== '' ? name : title);
  const card_description = (name !== '' ? title : description);

  return (
    <Link link={urlCheck(link, [state.frontity.url, state.frontity.adminUrl])}>
      <Card direction={direction} verticalSmall={verticalSmall}>
        <FrameBlock>
          <Frame src={imageUrlCheck(mediaUrl, urlsWithLocal)} />
        </FrameBlock>
        <Content>
          <ContentBlock>
            <Title sizeText={sizeText}>
              <Html2React html={card_title} />
            </Title>
            <Text sizeText={sizeText}>
              <Html2React html={card_description} />
            </Text>
          </ContentBlock>
          <DateBlock sizeText={sizeText}>
            { formatDatePerson(lang, date) }
          </DateBlock>
        </Content>
      </Card>
    </Link>
  );
};

export default connect(PersonCard);
