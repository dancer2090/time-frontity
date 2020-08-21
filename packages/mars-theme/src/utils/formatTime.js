export const formatTime = (valueDate) => {
  const date = new Date(valueDate);
  const minute = date.getMinutes();
  return `${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`;
};
