import React from 'react';
import {
  Wrapper,
} from './styles';
import Link from '../link';
import Translator from '../Translator/Translator';

const Breadcrumbs = ({ links = [], className = '' }) => (
  <Wrapper className={className}>
    <ul>
      <li>
        <Link link="/">
          <Translator id="home" />
        </Link>
      </li>
      {
        links.map((item, index) => (
          <li key={index}>
            <Link link={item.link}>
              {item.name}
            </Link>
          </li>
        ))
      }
    </ul>
  </Wrapper>
);

export default Breadcrumbs;
