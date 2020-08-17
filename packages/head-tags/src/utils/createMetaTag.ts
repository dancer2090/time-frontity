export const createMetaTag = (obj) => {
    return Object.keys(obj).map(item => {
        return {
            tag: 'meta',
            attributes: {
                name: item,
                content: obj[item],
            }
        };
    });
};
