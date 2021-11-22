const isPalindrome = s => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === [...str].reduce((acc, cur) => cur + acc, '');
};

const solution = newId => {
  const res = newId
    .toLowerCase()
    .replace(/[^0-9a-z\-.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .replace(/^$/, 'a')
    .slice(0, 15)
    .replace(/\.$/, '');

  const LEN = res.length;
  return LEN < 3 ? res + res[LEN - 1].repeat(3 - LEN) : res;
};

const replaceAtoSharp = str => (/^[A-Z]*$/.test(str) ? str.replace(/A/g, '#') : false);

const countUpperCase = str => str.match(/[A-Z]/g).length;

const count = (str, char) => str.match(new RegExp(char, 'g')).length;

const toggleCase = str => str.replace(/[A-Za-z]/g, c => (/[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase()));

const compress = str => str.replace(/(.)\1+/g, c => c[0] + c.length);
