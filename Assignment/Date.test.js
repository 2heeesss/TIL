const formatDate = date => {
  const year = date.getFullYear();
  const month = date.getMonth() > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
  const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
  return `${year}-${month}-${day}`;
};

describe('1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기', () => {
  test('2021/07/24 -> "2021-07-24"', () => {
    expect(formatDate(new Date('2021/07/24'))).toBe('2021-07-24');
  });

  test('1900/1/4 -> "1900-01-04"', () => {
    expect(formatDate(new Date('1900/1/4'))).toBe('1900-01-04');
  });
});

const getDay = date => {
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  return week[new Date(date).getDay()];
};

describe('2. 요일 구하기', () => {
  test('2021-07-24은 토요일 입니다.', () => {
    expect(getDay('2021-07-24')).toBe('토요일');
  });

  test('2021-07-25은 일요일 입니다.', () => {
    expect(getDay('2021-07-25')).toBe('일요일');
  });

  test('2021-07-26은 월요일 입니다.', () => {
    expect(getDay('2021-07-26')).toBe('월요일');
  });
});

const getLastDateOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

describe('3. 특정 달의 말일 구하기', () => {
  test('2021년 1월의 마지막 날은 31일 입니다.', () => {
    expect(getLastDateOfMonth(2021, 0)).toBe(31);
  });

  test('2021년 2월의 마지막 날은 28일 입니다.', () => {
    expect(getLastDateOfMonth(2021, 1)).toBe(28);
  });
});

const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

describe('4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다.', () => {
  test('2021년 1월 1일은 금요일', () => {
    expect(getFirstDayOfMonth(2021, 0)).toBe(5);
  });

  test('2021년 12월 1일은 수요일', () => {
    expect(getFirstDayOfMonth(2021, 11)).toBe(3);
  });
});

const getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDay();

describe('5. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기. 0은 일요일이고 6은 토요일이다', () => {
  test('2021년 1월 말일은 일요일', () => {
    expect(getLastDayOfMonth(2021, 0)).toBe(0);
  });

  test('2021년 12월 말일은 금요일', () => {
    expect(getLastDayOfMonth(2021, 11)).toBe(5);
  });
});

const diffDays = (date1, date2) => Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);

describe('6. 두 날짜 사이의 일수 구하기', () => {
  test('1월1일 ~ 12월31일 -> 364', () => {
    expect(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))).toBe(364);
  });
});

const isEqualDate = (date1, date2) => date1 + '' === date2 + '';

describe('2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기', () => {
  test('같은 Date객체는 true반환', () => {
    expect(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))).toBe(true);
  });

  test('다른 Date객체는 false반환', () => {
    expect(isEqualDate(new Date('2021/07/24'), new Date('2021/07/2'))).toBe(false);
  });
});
