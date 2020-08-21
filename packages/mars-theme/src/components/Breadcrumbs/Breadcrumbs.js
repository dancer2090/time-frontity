import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
} from './styles';
import Link from '../link';
import Translator from '../Translator/Translator';

const Breadcrumbs = ({ links = [], className = '', state }) => {
  const { lang = 'ru' } = state.theme;
  return (
    <Wrapper className={className}>
      <ul>
        <li>
          <Link link={lang === 'ru' ? '/' : '/uk/'}>
            <Translator id="home" />
          </Link>
        </li>
        {
          links.map((item, index) => (
            <li key={index}>
              <Link link={item.link}>
                { item.name }
              </Link>
            </li>
          ))
        }
      </ul>
    </Wrapper>
  );
};

export default connect(Breadcrumbs);
