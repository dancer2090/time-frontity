export const updateTags = (data, lang, checkUrl, imageCheck, state, dataId, decode) => {
    if (!data) {
        return [];
    }
    const { head_tags: tags = [] } = data;
    const {
        acf = {},
    } = data;
    const newTags = [];
    const n = tags.filter((item, i) => {
       if (item.tag === 'title') {
           const {
               title = '',
           } = acf[lang];
           newTags[i] = {
               tag: item.tag,
               content: title,
           }
       } else if (item.attributes) {
           const { property = '' } = item.attributes;
           const { rel = '' } = item.attributes;
           if (property === 'og:locale') {
               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: `${lang}_${lang.toUpperCase()}`
                   }
               }
           }
           if (property === 'og:title') {
              let { title } = state.frontity;

              if (dataId.isTaxonomy) {
                // Add titles to taxonomies, like "Category: Nature - Blog Name" or "Tag: Japan - Blog Name".
                // 1. Get the taxonomy entity from the state to get its taxonomy term and name.
                const { taxonomy, name } = state.source[dataId.taxonomy][dataId.id];
                // 2. Uppercase first letter of the taxonomy term (from "category" to "Category").
                const taxonomyCapitalized = taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);
                // 3. Render the proper title.
                let data2 = state.source.category[dataId.id];
                let {
                    acf = {},
                } = data2;
                let {
                   title : acfTitle = '',
                } = acf[lang];
                title = `${acfTitle} - ${state.frontity.title}`;
              } else if (dataId.isAuthor) {
                // Add titles to authors, like "Author: Jon Snow - Blog Name".
                // 1. Get the author entity from the state to get its name.
                const { name } = state.source.author[dataId.id];
                // 2. Render the proper title.
                title = `Author: ${decode(name)} - ${state.frontity.title}`;
              } else if (dataId.isPostType) {

                // Add titles to posts and pages, using the title and ending with the Blog Name.
                // 1. Get the post entity from the state and get its title.
                const post = state.source[dataId.type][dataId.id];
                const postTitle = post.title.rendered;
                // 2. Remove any HTML tags found in the title.
                const cleanTitle = decode(postTitle);

                let titleCat = '';

                if(dataId.isPost){
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

              } else if (dataId.isPersonaArchive) {
                title = lang === 'ru' ? `Персоны - ${state.frontity.title}` : `Персони - ${state.frontity.title}`;
              } else if (dataId.isImagesArchive) {
                title = lang === 'ru' ? `Фото - ${state.frontity.title}` : `Фото - ${state.frontity.title}`;
              } else if (dataId.isVideoArchive) {
                title = lang === 'ru' ? `Время ТВ - ${state.frontity.title}` :  `Час ТВ - ${state.frontity.title}`;
              } else if (dataId.is404) {
                // Add titles to 404's.
                title = `404 Not Found - ${state.frontity.title}`;
              }

               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: `${title}`
                   }
               }
           }
           if (property === 'og:url') {
               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: checkUrl(lang === 'ru' ? item.attributes.content : `${item.attributes.content}?lang=uk`)
                   }
               }
           }
           if (property === 'og:description') {
               const {
                   content = '',
               } = acf[lang];
               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content,
                   }
               }
           }
           if (property === 'og:image') {
               const {
                   featured_media: media = '',
               } = data;
               const {
                   source_url: urlImage = '',
               } = state.source.attachment[media];
               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: imageCheck(urlImage),
                   }
               }
           }
           if (rel === 'shortlink') {
              tags.splice(i,i);
           }
       }
       //return item
    });

    return newTags;
};