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
  } else if (data.isAuthor) {
    // Add titles to authors, like "Author: Jon Snow - Blog Name".
    // 1. Get the author entity from the state to get its name.
    const { name } = state.source.author[data.id];
    // 2. Render the proper title.
    title = `Author: ${decode(name)} - ${state.frontity.title}`;
  } else if (data.isPostType) {
    // Add titles to posts and pages, using the title and ending with the Blog Name.
    // 1. Get the post entity from the state and get its title.
    const post = state.source[data.type][data.id];
    const postTitle = post.title.rendered;
    // 2. Remove any HTML tags found in the title.
    const cleanTitle = decode(postTitle);

    let titleCat = '';
    if(data.isPost){
      // category post
      const linksCategory = state.router.link.split('/');
      let cats = '';

      if(linksCategory.length > 4) {
        for(let i = 1; i < linksCategory.length - 2; i ++){
          cats = `${cats}/${linksCategory[i]}`;
        }
        cats = `${cats}/`;
      }
      const categoryPost = cats !== '' ? cats : `/${linksCategory[1]}/`;

      let type = '';
      let categoryName = '';
      let categoryData = {};
      if (post.type === 'video') {
        type = 'video';
        categoryName = translator(lang, 'videoTitle');
        categoryData = state.source.get('/video/');
      } else if (post.type === 'persona') {
        categoryData = state.source.get(categoryPost);
        const category = state.source.category[categoryData.id] || {};
        categoryName = translator(lang, 'personCategory');
        type = 'interview';
      } else {
        categoryData = state.source.get(categoryPost);
        const category = state.source.category[categoryData.id] || {};
        const { acf: acfCategory = {} } = category;
        categoryName = acfCategory && acfCategory[lang] && acfCategory[lang].title ? acfCategory[lang].title : '';
      }

      titleCat = categoryName;
    }

    // 3. Render the proper title.
    if(titleCat === ''){
      title = `${cleanTitle} - ${state.frontity.title}`;
    } else {
      title = `${cleanTitle} - ${titleCat}`;
    }

  } else if (data.isPersonaArchive) {
    title = lang === 'ru' ? `Персоны - ${state.frontity.title}` : `Персони - ${state.frontity.title}`;
  } else if (data.isImagesArchive) {
    title = lang === 'ru' ? `Фото - ${state.frontity.title}` : `Фото - ${state.frontity.title}`;
  } else if (data.isVideoArchive) {
    title = lang === 'ru' ? `Время ТВ - ${state.frontity.title}` :  `Час ТВ - ${state.frontity.title}`;
  } else if (data.is404) {
    // Add titles to 404's.
    title = `404 Not Found - ${state.frontity.title}`;
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default connect(Title);
