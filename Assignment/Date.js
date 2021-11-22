const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
  return `${year}-${month}-${day}`;
};

const getDay = date => {
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return week[new Date(date).getDay()];
};

const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

const diffDays = (date1, date2) => Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);

const isEqualDate = (date1, date2) => date1 + '' === date2 + '';
