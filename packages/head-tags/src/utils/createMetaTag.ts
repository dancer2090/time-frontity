export const createMetaTag = (data, lang: string, checkUrl, imageCheck, state) => {
    const { head_tags: tags = [] } = data;
    console.log(tags);
    const {
        acf = {},
    } = data;

    return tags.map(item => {
       if (item.tag === 'title') {
           const {
               title = '',
           } = acf[lang];
           return {
               tag: item.tag,
               content: title,
           }
       } else if (item.attributes) {
           const { property = '' } = item.attributes;
           if (property === 'og:locale') {
               return {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: `${lang}_${lang.toUpperCase()}`
                   }
               }
           }
           if (property === 'og:title') {
               const {
                   title = '',
               } = acf[lang];
               return {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: `${title} Archives - Time`
                   }
               }
           }
           if (property === 'og:url') {
               return {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: checkUrl(item.attributes.content)
                   }
               }
           }
           if (property === 'og:description') {
               const {
                   content = '',
               } = acf[lang];
               return {
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
               return {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: imageCheck(urlImage),
                   }
               }
           }
       }
       return item
    });
};