export const createMetaTag = (data, lang: string, checkUrl, imageCheck, state) => {
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
               const {
                   title = '',
               } = acf[lang];
               newTags[i] = {
                   tag: item.tag,
                   attributes: {
                       ...item.attributes,
                       content: `${title} Archives - Time`
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
    Object.assign(tags, newTags);
    return tags;
};