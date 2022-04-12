# Leetcode - 13. Roman to Integer

#해쉬#문자열

## 풀이 복기

로마 숫자로 나올 수 있는 모든 경우의 수를 Map에 전부 저장했다. 그 다음 문자열 s를 순회하며 Map에 있는 key를 조회하며 value를 res에 누적하였다.
이런 방식으로 풀면서 로마숫자 `I ~ M` 까지는 Map에 저장하는게 맞다고 생각이 들었지만, `IV ~ CM` 과 같은 두자리 문자열이 조합된 로마숫자까지 저장할 필요는 없다고 생각했다. 앞 뒤 값의 차이로 구하는 방법으로 풀면 메모리 사용량을 더 적게 유지할 수 있을것이라 판단했기 때문이다. 사실 추가되는 요소가 6개라 큰 차이는 없지만 비슷한 다른 문제에서 요소가 조금 더 많아진다면 효율적이지 않을것이다.

이때문에 두번재 방법에서는 `I ~ M` 까지만 Map 에 저장 한 뒤, 문자열 s를 순회하며 앞 뒤 차이를 res에 누적했다.

### 풀이 1

```js
// 150 ms
// faster than 78.85 %
const getRomanValueMap = function () {
  const map = new Map();

  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  map.set('IV', 4);
  map.set('IX', 9);
  map.set('XL', 40);
  map.set('XC', 90);
  map.set('CD', 400);
  map.set('CM', 900);

  return map;
};

const romanToInt = function (s) {
  const valueMap = getRomanValueMap();
  let i = 0;
  let res = 0;

  while (i < s.length) {
    if (i === s.length - 1) {
      res += valueMap.get(s[i]);
      i += 1;
    } else {
      if (valueMap.has(s[i] + s[i + 1])) {
        res += valueMap.get(s[i] + s[i + 1]);
        i += 2;
      } else {
        res += valueMap.get(s[i]);
        i += 1;
      }
    }
  }
  return res;
};
```

### 풀이 2

```js
// 120 ms
// faster than 93.64%
const getRomanValueMap = function () {
  const map = new Map();

  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set('M', 1000);

  return map;
};

const romanToInt = function (s) {
  const valueMap = getRomanValueMap();
  let i = 0;
  let res = 0;

  while (i < s.length) {
    if (i === s.length - 1) {
      res += valueMap.get(s[i]);
      i += 1;
    } else {
      if (valueMap.get(s[i]) < valueMap.get(s[i + 1])) {
        res += valueMap.get(s[i + 1]) - valueMap.get(s[i]);
        i += 2;
      } else {
        res += valueMap.get(s[i]);
        i += 1;
      }
    }
  }
  return res;
};
```
