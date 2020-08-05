import React from 'react';
import {
  Container,
  TitleError,
  Description
} from './styles';

const Page404 = () => (
  <Container>
    <TitleError>
      Error
    </TitleError>
    <Description>
      <span>Sorry, this page does not exist</span>
      <span>
        You can visit the <a href="#">Home page</a> or <a href="">Case studies</a>
      </span>
    </Description>
  </Container>
);
export default Page404;
