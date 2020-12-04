import moment from 'moment';

export const formatTime = (valueDate) => {
  const resultDate = moment(valueDate).format("HH:mm");

  return `${resultDate}`;
};
