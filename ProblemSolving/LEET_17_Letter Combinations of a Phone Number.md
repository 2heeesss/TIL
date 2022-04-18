# Leetcode - 17. Letter Combinations of a Phone Number

#문자열#해쉬#백트래킹

## 풀이 복기

첫번째 풀이를 보면 letterCombinations 함수에 많은 로직을 작성하고 싶지 않아서 외부에 combi 함수를 선언했다. 이로 인해서 letterCombinations 함수는 깔끔해졌지만, combi 함수가 지저분해졌다. 매개변수가 4개나 되는 바람에 코드를 읽기도 힘들다고 판단했다.

하지만 map, res를 전역변수로 선언하기에는 스코프가 넓어져서 더 안좋은 코드가 된다고 생각했기때문에 전역변수로 선언하지는 않았다.

두번째 풀이에서 타협점을 확인 할 수 있다. combi 함수를 letterCombinations 함수 내부에 선언하면서 많은 매개변수 문제점도 해결할 수 있었고, 스코프를 넓히지 않게 되었다. 하지만 letterCombinations 함수의 로직이 많아진것은 해결할 수 없었다. 어떤 코드가 최선인지는 모르겠지만, 두번째 풀이 방법이 그나마 깔끔하다고 생각한다.

이번 문제는 통과하기 전까지 실수가 상당히 많았다. 머리속으로 계산할 수 있는것도 코드를 실행시켜가면서 하나씩 확인하다보니 내 코드에 확신이 없었고 시간이 더 걸린것 같다. 머리속으로 생각하는 충분한 시간을 갖자.

### 풀이 1

```js
// Runtime: 67 ms, faster than 71.16%
const getPhoneNumberMap = function () {
  const map = new Map();

  map.set(2, ['a', 'b', 'c']);
  map.set(3, ['d', 'e', 'f']);
  map.set(4, ['g', 'h', 'i']);
  map.set(5, ['j', 'k', 'l']);
  map.set(6, ['m', 'n', 'o']);
  map.set(7, ['p', 'q', 'r', 's']);
  map.set(8, ['t', 'u', 'v']);
  map.set(9, ['w', 'x', 'y', 'z']);

  return map;
};

const combi = function (digits, depth, current, map) {
  const res = [];
  if (depth >= digits.length) return current;
  map.get(+digits[depth]).forEach(fix => {
    current.push(fix);
    res.push([...combi(digits, depth + 1, current, map)]);
    current.pop();
  });
  return res;
};

const letterCombinations = function (digits) {
  if (digits === '') return [];

  const map = getPhoneNumberMap();
  const res = combi(digits, 0, [], map);

  return res.flat(digits.length - 1).map(val => val.join(''));
};
```

### 풀이 2

```js
// Runtime: 58 ms, faster than 92.05%
const getPhoneNumberMap = function () {
  const map = new Map();

  map.set(2, ['a', 'b', 'c']);
  map.set(3, ['d', 'e', 'f']);
  map.set(4, ['g', 'h', 'i']);
  map.set(5, ['j', 'k', 'l']);
  map.set(6, ['m', 'n', 'o']);
  map.set(7, ['p', 'q', 'r', 's']);
  map.set(8, ['t', 'u', 'v']);
  map.set(9, ['w', 'x', 'y', 'z']);

  return map;
};

const letterCombinations = function (digits) {
  if (digits === '') return [];

  const map = getPhoneNumberMap();
  const res = [];

  const combi = function (depth, current) {
    if (depth >= digits.length) {
      res.push(current.join(''));
      return;
    }
    map.get(+digits[depth]).forEach(fix => {
      current.push(fix);
      combi(depth + 1, current);
      current.pop();
    });
  };

  combi(0, []);

  return res;
};
letterCombinations('234');
```
