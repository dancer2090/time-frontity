import React, { useState, useRef } from 'react';
import { connect } from 'frontity';
import {
  MobileMenuWrapper,
  MenuWrapper,
  MenuHeader,
  MobileLanguage,
  MenuClose,
  MenuBody,
  Navigation,
  NavigationItem,
  IconArrow,
  NavigationSubContent,
  NavigationContent,
  MobileFooter,
  SocialListBlock,
  DownloadPdf,
  DownloadPdfIcon,
  DownloadPdfLabel,
  SubcribeBlock,
  GSubscribe,
  Overflow,
} from './styles';
import Link from '../../link';
import SocialList from '../../SocialList';
import Translator from '../../Translator/Translator';

const MobileMenu = ({
  state, actions, libraries, isOpen, closeModal, menu,
}) => {
  const { lang = 'ru' } = state.theme;
  const { urlCheck } = libraries.func;
  // link pdf file download
  const {
    acf: acfOptions = {},
  } = state.theme.options;
  const {
    pdf = '',
  } = acfOptions[lang];
  const subContent = useRef(null);
  const [navigation, setNavigation] = useState(menu);

  const toggleItem = (event, index) => {
    event.preventDefault();
    const htmlItems = subContent.current.parentElement.parentElement.childNodes;
    const result = navigation.map((item, indexEl) => {
      if (index === indexEl) {
        const activeValue = !item.active;
        const htmlSubMenu = htmlItems[index].childNodes;
        const height = activeValue ? htmlSubMenu[htmlSubMenu.length - 1].scrollHeight : 0;
        return {
          ...item,
          active: activeValue,
          height,
        };
      }

      return item;
    });

    setNavigation(result);
  };


  const changeLang = () => {
    const ldata = libraries.source.parse(state.frontity.url + state.router.link);
    if (lang !== 'uk') {
      state.theme.lang = 'uk';
      if(ldata.query && ldata.query.s) actions.router.set(`${state.router.link}&lang=uk`);
      else  actions.router.set(`${state.router.link}?lang=uk`);
    } else {
      state.theme.lang = 'ru';
      actions.router.set(`${state.router.link.replace('&lang=uk', '').replace('?lang=uk', '')}`);
    }
    closeModal();
    const { header_menu = [] } = acfOptions[state.theme.lang];
    const filterMenu = header_menu.map((item) => ({
      ...item,
      active: false,
    }));
    actions.theme.loadNewsIntegration();
    setNavigation(filterMenu);
  };

  const changeRouter = () => {
    closeModal();
    const result = navigation.map((item) => ({
      ...item,
      active: false,
      height: 0,
    }));
    setNavigation(result);
  };

  return (
    <MobileMenuWrapper isOpen={isOpen}>
      <Overflow onClick={() => closeModal()} />
      <MenuWrapper isOpen={isOpen}>
        <MenuHeader>
          <MenuClose name="close" onClick={() => closeModal()} />
          <MobileLanguage onClick={() => changeLang()}>
            {
              lang === 'ru'
                ? <span>Ru / uk</span>
                : <span>Uk / ru</span>
            }
          </MobileLanguage>
        </MenuHeader>
        <MenuBody>
          <Navigation>
            {
              navigation.map((item, index) => {
                const { link = {} } = item;
                return (
                  <NavigationItem key={index}>
                    {
                      item.subMenu
                        ? (
                          <span onClick={(e) => toggleItem(e, index)}>
                            { link.title }
                          </span>
                        )
                        : (
                          <Link
                            link={urlCheck(link.url, [state.frontity.url, state.frontity.adminUrl])}
                            afterClick={() => changeRouter()}
                          >
                            { link.title }
                          </Link>
                        )
                    }
                    {
                      item.subMenu && (
                        <>
                          <IconArrow
                            name="arrow-lang"
                            active={item.active}
                          />
                          <NavigationSubContent
                            ref={subContent}
                            height={item.height ? item.height : 0}
                          >
                            <NavigationContent>
                              {
                                item.subMenu.map((subItem, subIndex) => {
                                  const { link: linkItem = {} } = subItem;
                                  return (
                                    <Link
                                      key={subIndex}
                                      link={urlCheck(linkItem.url, [state.frontity.url, state.frontity.adminUrl])}
                                      afterClick={() => closeModal()}
                                    >
                                      { linkItem.title }
                                    </Link>
                                  );
                                })
                              }
                            </NavigationContent>
                          </NavigationSubContent>
                        </>
                      )
                    }
                  </NavigationItem>
                );
              })
            }
          </Navigation>
          <MobileFooter>
            <SubcribeBlock>
              <GSubscribe />
            </SubcribeBlock>
            <DownloadPdf href={pdf} download target="__blank">
              <DownloadPdfIcon name="pdf" />
              <DownloadPdfLabel>
                <Translator id="pdfLabelTime" />
              </DownloadPdfLabel>
            </DownloadPdf>
            <SocialListBlock>
              <SocialList />
            </SocialListBlock>
          </MobileFooter>
        </MenuBody>
      </MenuWrapper>
    </MobileMenuWrapper>
  );
};

export default connect(MobileMenu);
