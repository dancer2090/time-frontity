/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { connect } from 'frontity';

const Link = ({
  state,
  actions,
  link,
  className,
  itemProp,
  children,
  afterClick = () => { console.log('after click'); },
  'aria-current': ariaCurrent,
}) => {
  if( state.theme.lang !== "ru" ) link = '/' + state.theme.lang + link;
  const onClick = (event) => {
    // Do nothing if it's an external link
    if (link.startsWith(state.frontity.url)) {
      event.preventDefault();
      actions.router.set(link.replace(state.frontity.url, ''));
    } else if (link.startsWith(state.frontity.adminUrl)) {
      event.preventDefault();
      actions.router.set(link.replace(state.frontity.adminUrl, ''));
    } else {
      if (link.startsWith('http')) return;
      event.preventDefault();
      // Set the router to the new url.
      actions.router.set(link);
      // Scroll the page to the top
    }
    afterClick();
    window.scrollTo(0, 0);
  };

  return (
    <a
      href={link}
      onClick={onClick}
      className={className}
      aria-current={ariaCurrent}
      itemProp={itemProp}
    >
      {children}
    </a>
  );
};

export default connect(Link);
