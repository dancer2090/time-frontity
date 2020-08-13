import { formatDate } from './formatDate';
import { formatTime } from './formatTime';

export const filterNewsTimeLine = (lang, dataNews) => {
  const allPosts = [...dataNews];
  const data = allPosts;
  const resultsData = [];
  allPosts.forEach((item) => {
    const date = formatDate(lang, item.date);
    const result = [];
    data.forEach((element) => {
      if (formatDate(lang, element.date) === date) {
        result.push({
          time: formatTime(element.date),
          date: formatDate(lang, element.date),
          post: {
            ...element,
          },
        });
      }
    });
    if (resultsData.length === 0) {
      resultsData.push(result);
    } else {
      const filterArray = resultsData.filter((el) => {
        if (JSON.stringify(el) === JSON.stringify(result)) {
          return true;
        }
      });

      if (filterArray.length === 0) {
        resultsData.push(result);
      }
    }
  });
  return resultsData.map((item) => ({
    date: item[0].date,
    posts: item,
  }));
};
