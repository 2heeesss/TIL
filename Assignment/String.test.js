const isPalindrome = s => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === [...str].reduce((acc, cur) => cur + acc, '');
};

describe('1. 유효한 팰린드롬', () => {
  test('팰린드롬 맞으면 true', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy();
  });

  test('팰린드롬 아니면 false', () => {
    expect(isPalindrome('race a car')).toBeFalsy();
  });
});

const replaceAtoSharp = str => (/^[A-Z]*$/.test(str) ? str.replace(/A/g, '#') : false);

describe('3. A를 #으로', () => {
  test('대문자로 이루어진 영어 단어가 입력되면 단어에 포함된 ‘A’를 모두 ’#‘으로 바꾸어 출력', () => {
    expect(replaceAtoSharp('BANANA')).toBe('B#N#N#');
  });
});

const countUpperCase = str => str.match(/[A-Z]/g).length;

describe('4. 대문자 찾기', () => {
  test('한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지', () => {
    expect(countUpperCase('KoreaTimeGood')).toBe(3);
  });
});

const count = (str, char) => str.match(new RegExp(char, 'g')).length;

describe('5. 문자 찾기', () => {
  test('한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지', () => {
    expect(count('COMPUTERPROGRAMMING', 'R')).toBe(3);
  });
});

const toggleCase = str => str.replace(/[A-Za-z]/g, c => (/[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase()));

describe('6. 대소문자 변환', () => {
  test('대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환', () => {
    expect(toggleCase('StuDY')).toBe('sTUdy');
  });
});
