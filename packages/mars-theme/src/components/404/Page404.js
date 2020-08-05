import React from 'react';

import {
  Container,
  TitleError,
  Frame,
  Description
} from './styles';
import img404 from '../../img/404.svg';

const Page404 = () => (
  <Container>
    <TitleError>
      Error
    </TitleError>
    <Frame src={img404} />
    <Description>
      <span>Sorry, this page does not exist</span>
      <span>
        You can visit the <a href="#">Home page</a> or <a href="">Case studies</a>
      </span>
    </Description>
  </Container>
);
export default Page404;
