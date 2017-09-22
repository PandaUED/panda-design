const monthEN = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export default str => {
  if (str === '') return;
  let date;
  let year = str.substring(0, 4),
    month = str.substring(4, 6),
    day = str.substring(6, 8),
    hour = str.substring(8, 10),
    min = str.substring(10, 12),
    sec = str.substring(12, 14);

  const time = new Date(year, month - 1, day, hour, min, sec).getTime();
  const timeNow = new Date().getTime();
  const absond = parseInt((timeNow - time) / 1000);
  const abs = Math.abs(absond);
  const options = {
    sec: '%d 秒前',
    min: '%d 分钟前',
    hour: '%d 小时前',
    day: '%d 天前',
    week: '%d 周前',
  };
  let v = abs;
  if (abs < 60) {
    v = abs;
    date = options.sec.replace('%d', parseInt(v));
  } else if (abs < 3600) {
    v = abs / 60;
    date = options.min.replace('%d', parseInt(v));
  } else if (abs < 86400) {
    v = abs / 3600;
    date = options.hour.replace('%d', parseInt(v));
  } else if (abs < 604800) {
    v = abs / 86400;
    date = options.day.replace('%d', parseInt(v));
  } else if (abs < 2592000) {
    v = abs / 604800;
    date = options.week.replace('%d', parseInt(v));
  } else {
    date = [day, monthEN[mouth - 1], year].join(' ');
  }

  return date;
};
