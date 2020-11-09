import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  GIconTag,
  List,
} from './styles';
import Link from '../link';

const TabsPost = ({items = [], state, libraries}) => {
  const { urlCheck, cutStr } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const arrTags = [];
  const { lang = 'ru' } = state.theme;
  items.length > 0 && items.map((item) => {
    const {
      acf = {},
      link = '',
    } = item; 
    if(acf){
      const {
        title = '',
      } = acf[lang];
      arrTags.push({
        title : title,
        link : link
      })
    }
  });
return (
  <Wrapper>
    <GIconTag name="tag" />
    <List>
      {arrTags.map((item) => (
        <Link link={urlCheck(item.link, [state.frontity.url, state.frontity.adminUrl])}>
          {item.title}
        </Link>
      ))}
    </List>
  </Wrapper>
)};

export default connect(TabsPost);
