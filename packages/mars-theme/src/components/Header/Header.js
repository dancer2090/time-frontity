import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'frontity';
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
  MobileSearch,
  MobileSearchBlockIcon,
  MobileSearchBlock,
  MobileSearchClose,
  MobileInput,
} from './styles';
import Link from '../link';
import MobileMenu from './MobileMenu';

const languageOptions = ['ru', 'uk'];

const Header = ({ state, libraries, actions }) => {
  // data theme options
  const { lang = 'ru' } = state.theme;
  const { acf = {} } = state.theme.options;
  const { header_menu = [] } = acf[lang];
  const { logo = {} } = acf;
  const { imageUrlCheck } = libraries.func;
  const { urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const urlImage = imageUrlCheck(logo.url, urlsWithLocal);

  const filterMenu = header_menu.map((item) => ({
    ...item,
    active: false,
  }));

  // state
  const navigation = useRef(null);
  const searchInput = useRef(null);
  const mobileSearchInput = useRef(null);
  const [resizeContainer, setResizeContainer] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [languageValue, setLanguageValue] = useState(lang);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [search, setSearch] = useState('');
  const [mobileSearch, setMobileSearch] = useState(false);
  const [linksSubMenu, setLinksSubMenu] = useState([]);
  const [changeSubLink, setChangeSubLink] = useState(false);
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

    if (changeSubLink) {
      setShowNavigation(false);
      setChangeSubLink(false);
    }
  }, [state.router.link]);



  const getQuery = () => {
    const ldata = libraries.source.parse(state.frontity.url + state.router.link);
    return ldata.query;
  };

  const setLanguage = (e, index) => {
    e.preventDefault();


    const queryLink = getQuery();
    if (filterLanguage[index] === 'uk') {
      queryLink.lang = 'uk';
    } else {
      delete queryLink.lang;
    }
    const queryString = Object.keys(queryLink).map((key) => `${key}=${queryLink[key]}`).join('&');
    const data = state.source.get(state.router.link);

    if (filterLanguage[index] === 'uk') {
      state.theme.lang = 'uk';
    } else {
      state.theme.lang = filterLanguage[index];
    }
    actions.router.set(data.route + `${queryString && queryString !== '' && '?'+queryString}`);
    window.location.reload();
    actions.theme.loadNewsIntegration();
    setShowLanguage(false);
    setLanguageValue(filterLanguage[index]);

  };

  const sendSearch = (e) => {
    if (e.key === 'Enter') {
      const redirectUrl = lang === 'ru' ? `/search-result/?s=${search}` : `/search-result/?s=${search}&lang=uk`;
      actions.router.set(redirectUrl, {
        state: {
          search,
        },
      });
      setShowSearch(false);
      setSearch('');
    }
  };

  const toggleLinks = (e, index) => {
    e.preventDefault();
    setLinksSubMenu(filterMenu[index].subMenu);
    setShowNavigation(!showNavigation);
  };

  const showSearchBlock = () => {
    searchInput.current.focus();
    setShowSearch(true);
  };

  const showSearchBlockMobile = () => {
    mobileSearchInput.current.focus();
    setMobileSearch(true);
  };

  return (
    <Wrapper open={showNavigation}>
      <WrapperContainer>
        <Container resize={resizeContainer}>
          <TopLayout resize={resizeContainer}>
            <BurgerButton onClick={() => setShowMobileModal(true)}>
              <BurgerIcon name="burger" />
            </BurgerButton>
            <Link link="/">
              <Logo src={urlImage} />
            </Link>
            <MobileSearchIcon onClick={() => showSearchBlockMobile()} name="search" />
            <MobileSearch show={mobileSearch}>
              <MobileSearchBlockIcon name="search" />
              <MobileSearchBlock>
                <MobileInput
                  value={search}
                  ref={mobileSearchInput}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyPress={(e) => sendSearch(e)}
                />
              </MobileSearchBlock>
              <MobileSearchClose onClick={() => setMobileSearch(false)} name="close" />
            </MobileSearch>
          </TopLayout>
          <BottomContent ref={navigation}>
            <ScrollImage resize={resizeContainer} src={urlImage} />
            <BottomRelative>
              <Navigation>
                {
                  filterMenu.map((item, index) => {
                    const { link = {} } = item;
                    return (
                      !item.subMenu
                        ? (
                          <Link
                            key={index}
                            link={urlCheck(link.url, [state.frontity.url, state.frontity.adminUrl])}
                            afterClick={() => setChangeSubLink(true)}
                          >
                            { link.title }
                          </Link>
                        )
                        : (
                          <span key={index} onClick={(e) => toggleLinks(e, index)}>
                            { link.title }
                          </span>
                        )
                    );
                  })
                }
              </Navigation>
              <Search active={showSearch}>
                <SearchIcon name="search" onClick={() => showSearchBlock()} />
                <SearchWrapper active={showSearch}>
                  <SearchInputBlock>
                    <SearchInput
                      value={search}
                      ref={searchInput}
                      onChange={(e) => setSearch(e.target.value)}
                      onKeyPress={(e) => sendSearch(e)}
                    />
                  </SearchInputBlock>
                  <SearchCloseIcon name="close" onClick={() => setShowSearch(false)} />
                </SearchWrapper>
              </Search>
            </BottomRelative>
            
            <Language>
              <LanguageValueBlock
                onClick={() => setShowLanguage(!showLanguage)}
                active={showLanguage}
              >
                <LanguageValue>
                  {languageValue}
                </LanguageValue>
                <LanguageIcon name="arrow-lang" />
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
            {
              linksSubMenu.map((item, index) => {
                const { link = {} } = item;
                return (
                  <Link
                    key={index}
                    link={urlCheck(link.url, [state.frontity.url, state.frontity.adminUrl])}
                  >
                    { link.title }
                  </Link>
                );
              })
            }
          </Links>
        </HeaderContent>
      </WrapperContainer>

      <MobileMenu
        isOpen={showMobileModal}
        closeModal={() => setShowMobileModal(false)}
        menu={filterMenu}
      />
    </Wrapper>
  );
};

export default connect(Header);
