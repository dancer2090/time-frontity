import React from 'react';
import {
  Wrapper,
  Container,
  TopLayout,
  Logo,
  BottomContent,
  Navigation,
  Search,
  SearchIcon,
  SearchWrapper,
  SearchInputBlock,
  SearchCloseIcon,
  Language,
  LanguageValueBlock,
  LanguageValue,
  LanguageIcon,
} from './styles';
import logo from '../../img/logo.svg';
import Link from '../link';

const Header = () => (
  <Wrapper>
    <Container>
      <TopLayout>
        <Logo src={logo} />
      </TopLayout>
      <BottomContent>
        <Navigation>
          <Link link="#">Харьков</Link>
          <Link link="#">Украина</Link>
          <Link link="#">аналитика</Link>
          <Link link="#">мнения</Link>
          <Link link="#">светская хроника</Link>
          <Link link="#">персоны</Link>
          <Link link="#">подкасты</Link>
          <Link link="#">ВРЕМЯ тВ</Link>
          <Link link="#">фото</Link>
          <Link link="#">спецтемы</Link>
          <Link link="#">о нас</Link>
        </Navigation>
        <Search>
          <SearchIcon name="search" />
          <SearchWrapper>
            <SearchInputBlock>12</SearchInputBlock>
            <SearchCloseIcon name="close" />
          </SearchWrapper>
        </Search>
        <Language>
          <LanguageValueBlock>
            <LanguageValue>
              ru
            </LanguageValue>
            <LanguageIcon name="arrow-lang" />
          </LanguageValueBlock>
        </Language>
      </BottomContent>
    </Container>
  </Wrapper>
);

export default Header;
