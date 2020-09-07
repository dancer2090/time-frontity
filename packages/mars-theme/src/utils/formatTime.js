export const formatTime = (valueDate) => {
  const date = new Date(valueDate.replace(/\s/, 'T'));
  const minute = date.getMinutes(); 
  return `${date.getHours()}:${minute < 10 ? `0${minute}` : minute}`;
};
