import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  TitleError,
  Description,
} from './styles';
import { Container } from '../globalStyles';
import Link from '../link';
import Translator from '../Translator/Translator';

const Page404 = ({ state }) => {
  const { lang = 'ru' } = state.theme;
  return (
    <Wrapper>
      <Container>
        <TitleError>
          4
          <span>0</span>
          4
        </TitleError>
        <Description>
          <span>
            <Translator id="titleErrorPage" />
          </span>
          <span>
            <Translator id="titleErrorDescription" />
            {' '}
            <Link link={lang === 'ru' ? '/' : '/uk'}>
              <Translator id="homeError" />
            </Link>
          </span>
        </Description>
      </Container>
    </Wrapper>
  );
};

export default connect(Page404);
