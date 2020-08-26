import React from 'react';
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

const SpecialThemeTemplate = () => (
  <Wrapper>
    <Container>
      <TopNavigation>
        <Breadcrumbs links={[
          { name: 'Харьков', link: '#' },
        ]}
        />
        <SocialList />
      </TopNavigation>
      <Title>
        Спецтемы
      </Title>
      <CardList>
        <Col>
          <Card>
            <CardFrameBlock>
              <CardFrame src={specialImage} />
            </CardFrameBlock>
            <CardContent>
              <Link link="#">
                Медицина
              </Link>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardFrameBlock>
              <CardFrame src={specialImage} />
            </CardFrameBlock>
            <CardContent>
              <Link link="#">
                Медицина
              </Link>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardFrameBlock>
              <CardFrame src={specialImage} />
            </CardFrameBlock>
            <CardContent>
              <Link link="#">
                Медицина
              </Link>
            </CardContent>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardFrameBlock>
              <CardFrame src={specialImage} />
            </CardFrameBlock>
            <CardContent>
              <Link link="#">
                Медицина
              </Link>
            </CardContent>
          </Card>
        </Col>
      </CardList>
    </Container>
  </Wrapper>
);

export default SpecialThemeTemplate;
