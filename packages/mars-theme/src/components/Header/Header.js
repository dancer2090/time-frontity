import React, { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  WrapperContainer,
  Container,
  TopLayout,
  Logo,
  BottomContent,
  BottomRelative,
  Navigation,
  Search,
  SearchIcon,
  SearchWrapper,
  SearchInput,
  SearchInputBlock,
  SearchCloseIcon,
  Language,
  LanguageValueBlock,
  LanguageValue,
  LanguageIcon,
  LanguageShow,
  LanguageSpan,
  ScrollImage,
  HeaderContent,
  Links,
  BurgerButton,
  BurgerIcon,
  MobileSearchIcon,
} from './styles';
import logo from '../../img/logo.svg';
import Link from '../link';
import MobileMenu from './MobileMenu';

const languageOptions = ['ru', 'ukr'];

const Header = () => {
  const navigation = useRef(null);
  const [resizeContainer, setResizeContainer] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [languageValue, setLanguageValue] = useState('ru');
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState('');
  const filterLanguage = languageOptions.filter((item) => item !== languageValue);

  useEffect(() => {
    const { top } = navigation.current.getBoundingClientRect();
    window.addEventListener('scroll', function () {
      if (window.innerWidth > 992) {
        if (this.scrollY >= top) {
          setResizeContainer(true);
        } else {
          setResizeContainer(false);
        }
      }
    });
  }, []);

  const setLanguage = (e, index) => {
    e.preventDefault();

    setShowLanguage(false);
    setLanguageValue(filterLanguage[index]);
  };

  const sendSearch = (e) => {
    if (e.key === 'Enter') {
      setShowSearch(false);
      setSearch('');
    }
  };

  const toggleLinks = (e) => {
    e.preventDefault();
    setShowNavigation(!showNavigation);
  };

  return (
    <Wrapper open={showNavigation}>
      <WrapperContainer>
        <Container resize={resizeContainer}>
          <TopLayout resize={resizeContainer}>
            <BurgerButton>
              <BurgerIcon name="burger" />
            </BurgerButton>
            <Logo src={logo} />
            <MobileSearchIcon name="search" />
          </TopLayout>
          <BottomContent ref={navigation}>
            <ScrollImage resize={resizeContainer} src={logo} />
            <BottomRelative>
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
                <span onClick={(e) => toggleLinks(e)}>о нас</span>
              </Navigation>
              <Search active={showSearch}>
                <SearchIcon name="search" onClick={() => setShowSearch(true)} />
                <SearchWrapper active={showSearch}>
                  <SearchInputBlock>
                    <SearchInput
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyPress={(e) => sendSearch(e)}
                    />
                  </SearchInputBlock>
                  <SearchCloseIcon name="close" onClick={() => setShowSearch(false)} />
                </SearchWrapper>
              </Search>
            </BottomRelative>
            <Language>
              <LanguageValueBlock onClick={() => setShowLanguage(!showLanguage)}>
                <LanguageValue>
                  {languageValue}
                </LanguageValue>
                <LanguageIcon name="arrow-lang" active={showLanguage} />
              </LanguageValueBlock>
              <LanguageShow show={showLanguage}>
                {
                  filterLanguage.map((item, index) => (
                    <LanguageSpan
                      key={index}
                      onClick={(e) => setLanguage(e, index)}
                    >
                      { item }
                    </LanguageSpan>
                  ))
                }
              </LanguageShow>
            </Language>
          </BottomContent>
        </Container>
        <HeaderContent show={showNavigation}>
          <Links>
            <Link link="#">Контакты</Link>
            <Link link="#">Медиацентр</Link>
          </Links>
        </HeaderContent>
      </WrapperContainer>

      <MobileMenu />
    </Wrapper>
  );
};

export default Header;
