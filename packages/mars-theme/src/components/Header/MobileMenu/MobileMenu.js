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

const MobileMenu = ({
  state, actions, isOpen, closeModal, menu,
}) => {
  const { lang = 'ru' } = state.theme;
  const subContent = useRef(null);
  const [navigation, setNavigation] = useState(menu);
  const toggleItem = (event, index) => {
    event.preventDefault();

    const result = navigation.map((item, indexEl) => {
      if (index === indexEl) {
        const activeValue = !item.active;
        const height = activeValue ? subContent.current.scrollHeight : 0;
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
    if (lang !== 'uk') {
      state.theme.lang = 'uk';
      actions.router.set(`/uk${state.router.link}`);
    } else {
      state.theme.lang = 'ru';
      const url = state.router.link.replace('/uk', '');
      actions.router.set(url);
    }
    setNavigation(menu);
    closeModal();
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
                          <Link link={link.url}>
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
                                    <Link link={linkItem.url} key={subIndex}>
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
            <DownloadPdf href="file.pdf">
              <DownloadPdfIcon name="pdf" />
              <DownloadPdfLabel>
                Печатный вариант “Время”
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
