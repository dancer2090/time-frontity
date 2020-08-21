import axios from 'axios';

export const getIdVideo = (url) => {
  const linkArray = url.split('?v=');
  if (linkArray.length === 0 || linkArray.length === 1) {
    return '';
  }

  return linkArray[1];
};

export const generatePreviewYoutubeLink = (url) => {
  const id = getIdVideo(url);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

export const formatYoutubeTime = (duration) => {
  const secondsRegex = new RegExp(/M\w+S/);
  const resultSearch = secondsRegex.exec(duration)[0];
  let seconds = resultSearch.replace('M', '');
  seconds = seconds.replace('S', '');
  let minute = '';

  if (duration.includes('H')) {
    const hoursRegex = new RegExp(/T\w+H/);
    const resultHours = hoursRegex.exec(duration)[0];
    const minuteRegex = new RegExp(/H\w+M/);
    const resultMinute = minuteRegex.exec(duration)[0];
    minute = resultMinute.replace('H', '');
    minute = minute.replace('M', '');
    let hours = resultHours.replace('T', '');
    hours = hours.replace('H', '');

    return `${hours}:${minute < 10 ? `0${minute}` : minute}:00`;
  }
  const minuteRegex = new RegExp(/T\w+M/);
  const resultMinute = minuteRegex.exec(duration)[0];
  minute = resultMinute.replace('T', '');
  minute = minute.replace('M', '');

  return `${minute < 10 ? `0${minute}` : minute}:${seconds}`;
};

export const getTimeVideo = async (url) => {
  const id = getIdVideo(url);
  const sendUrl = `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=contentDetails&key=AIzaSyCpa6XnZXxDgqOJA3BWK_LMrQLnvtpFvLA`;
  const { data } = await axios.get(sendUrl);
  const {
    items = [],
  } = data;
  const { contentDetails = {} } = items[0];
  const { duration = '' } = contentDetails;
  return formatYoutubeTime(duration);
};
