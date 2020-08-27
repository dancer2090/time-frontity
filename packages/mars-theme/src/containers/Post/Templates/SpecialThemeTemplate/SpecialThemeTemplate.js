import React, { useEffect } from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TopNavigation,
  CardList,
  Col,
  Card,
  CardFrameBlock,
  CardFrame,
  CardContent,
} from './styles';
import specialImage from '../../../../img/card-special.jpg';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs/Breadcrumbs';
import SocialList from '../../../../components/SocialList/SocialList';
import Title from '../../../../components/Title';
import Link from '../../../../components/link';

const SpecialThemeTemplate = ({ state, libraries, actions }) => {
  // Component exposed by html2react.
  const Html2React = libraries.html2react.Component;
  const { lang = 'ru' } = state.theme;
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  // data page
  const data = state.source.get(state.router.link);
  const categoryData = state.source.category[data.id];
  const postData = state.source.data[state.router.link];

  useEffect(() => {
    actions.theme.loadSpecialTheme();
  }, []);

  const {
    acf: acfCategory = {},
  } = categoryData;
  const {
    title = '',
  } = acfCategory[lang];
  const {
    items = [],
  } = postData;

  const cardsRender = () => {
    console.log(items);
    return items.map((item, index) => {
      const {
        acf = {},
      } = item;
      const {
        image = '',
      } = acf;
      const {
        title: titleTheme = '',
      } = acf[lang];
      return (
        <Col key={index}>
          <Card>
            <CardFrameBlock>
              <CardFrame src={imageUrlCheck(image.url, urlsWithLocal)} />
            </CardFrameBlock>
            <CardContent>
              <Link link="#">
                { titleTheme }
              </Link>
            </CardContent>
          </Card>
        </Col>
      );
    });
  };

  return (
    <Wrapper>
      <Container>
        <TopNavigation>
          <Breadcrumbs links={[
            { name: <Html2React html={title} />, link: '#' },
          ]}
          />
          <SocialList />
        </TopNavigation>
        <Title>
          <Html2React html={title} />
        </Title>
        <CardList>
          { cardsRender() }
        </CardList>
      </Container>
    </Wrapper>
  );
};

export default connect(SpecialThemeTemplate);
