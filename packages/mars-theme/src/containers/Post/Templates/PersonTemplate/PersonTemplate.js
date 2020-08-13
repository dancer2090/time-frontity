import React from 'react';
import {
  Wrapper,
  TopNavigation,
  BigPerson,
  Row,
  Col,
} from './styles';
import { Container } from '../../../../components/globalStyles';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import SocialList from '../../../../components/SocialList';
import Title from '../../../../components/Title';
import PersonCard from '../../../../components/PersonCard';

const PersonTemplate = () => (
  <Wrapper>
    <Container>
      <TopNavigation>
        <Breadcrumbs links={[
          { name: 'Персоны', link: '#' },
        ]}
        />
        <SocialList />
      </TopNavigation>
      <Title>
        Персоны
      </Title>
      <BigPerson>
        <PersonCard />
      </BigPerson>
      <Row>
        <Col>
          <PersonCard direction="column" sizeText="small" />
        </Col>
        <Col>
          <PersonCard direction="column" sizeText="small" />
        </Col>
        <Col>
          <PersonCard direction="column" sizeText="small" />
        </Col>
      </Row>
    </Container>
  </Wrapper>
);

export default PersonTemplate;
