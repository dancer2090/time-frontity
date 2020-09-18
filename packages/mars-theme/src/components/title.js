import React, { useEffect } from 'react';
import { Head, connect, decode } from 'frontity';

const Title = ({ state, actions }) => {
  // Get data about the current URL.
  const data = state.source.get(state.router.link);
  // Set the default title.
  let { title } = state.frontity;
  const { lang = 'ru' } = state.theme;

  if (data.isTaxonomy) {
    // Add titles to taxonomies, like "Category: Nature - Blog Name" or "Tag: Japan - Blog Name".
    // 1. Get the taxonomy entity from the state to get its taxonomy term and name.
    const { taxonomy, name } = state.source[data.taxonomy][data.id];
    // 2. Uppercase first letter of the taxonomy term (from "category" to "Category").
    const taxonomyCapitalized = taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
    // 3. Render the proper title.
    let data2 = state.source.category[data.id];
    let {
        acf = {},
    } = data2;
    let {
       title : acfTitle = '',
    } = acf[lang];
    title = `${acfTitle} - ${state.frontity.title}`;
    console.log(1);
  } else if (data.isAuthor) {
    // Add titles to authors, like "Author: Jon Snow - Blog Name".
    // 1. Get the author entity from the state to get its name.
    const { name } = state.source.author[data.id];
    // 2. Render the proper title.
    title = `Author: ${decode(name)} - ${state.frontity.title}`;
    console.log(2);
  } else if (data.isPostType) {
    // Add titles to posts and pages, using the title and ending with the Blog Name.
    // 1. Get the post entity from the state and get its title.
    const postTitle = state.source[data.type][data.id].title.rendered;
    // 2. Remove any HTML tags found in the title.
    const cleanTitle = decode(postTitle);
    // 3. Render the proper title.
    title = `${cleanTitle} - ${state.frontity.title}`;
    console.log(3);
  } else if (data.isPersonaArchive) {
    title = lang === 'ru' ? `Персоны - ${state.frontity.title}` : `Персони - ${state.frontity.title}`;
    console.log(4);
  } else if (data.isImagesArchive) {
    title = lang === 'ru' ? `Фото - ${state.frontity.title}` : `Фото - ${state.frontity.title}`;
    console.log(5);
  } else if (data.isVideoArchive) {
    title = lang === 'ru' ? `Время ТВ - ${state.frontity.title}` :  `Час ТВ - ${state.frontity.title}`;
    console.log(6);
  } else if (data.is404) {
    // Add titles to 404's.
    title = `404 Not Found - ${state.frontity.title}`;
  }

  useEffect(() => {
    title = actions.theme.getTitle();
    console.log(1);
  },[])

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
