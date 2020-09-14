import moment from 'moment';

export const formatTime = (valueDate) => {
  const resultDate = moment(valueDate).utcOffset(3).format("HH:mm");

  return `${resultDate}`;
};
