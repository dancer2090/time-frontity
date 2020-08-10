import React, { useState, useRef } from 'react';
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
} from './styles';
import Link from '../../link';
import SocialList from '../../SocialList';

const navigationOption = [
  {
    name: 'Главная',
  },
  {
    name: 'Украина',
  },
  {
    name: 'Аналитика',
  },
  {
    name: 'Аналитика',
    active: false,
    subMenu: [
      {
        name: 'Культурные обзоры',
      },
      {
        name: 'Рынок недвижимости',
      },
      {
        name: 'Медицина',
      },
    ],
  },
  {
    name: 'Украина',
    active: false,
    subMenu: [
      {
        name: 'Культурные обзоры',
      },
      {
        name: 'Рынок недвижимости',
      },
    ],
  },
  {
    name: 'Аналитика',
  },
];

const MobileMenu = () => {
  const subContent = useRef(null);
  const [navigation, setNavigation] = useState(navigationOption);
  const toggleItem = (event, index) => {
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

  return (
    <MobileMenuWrapper>
      <MenuWrapper>
        <MenuHeader>
          <MenuClose name="close" />
          <MobileLanguage>
            Ru / ukr
          </MobileLanguage>
        </MenuHeader>
        <MenuBody>
          <Navigation>
            {
              navigation.map((item, index) => {
                return (
                  <NavigationItem key={index}>
                    <Link link="#">
                      { item.name }
                    </Link>
                    {
                      item.subMenu && (
                        <>
                          <IconArrow
                            name="arrow-lang"
                            active={item.active}
                            onClick={(e) => toggleItem(e, index)}
                          />
                          <NavigationSubContent
                            ref={subContent}
                            height={item.height ? item.height : 0}
                          >
                            <NavigationContent>
                              {
                                item.subMenu.map((subItem, subIndex) => (
                                  <Link link="#" key={subIndex}>
                                    { subItem.name }
                                  </Link>
                                ))
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
            <DownloadPdf>
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

export default MobileMenu;
