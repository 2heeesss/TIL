# Leetcode - 62. Unique Paths

#Array#Math

## 풀이 복기

풀이 1번이 실패한 이유는 입력받는 숫자의 최댓값이 10^100 때문이다.

자바스크립트의 숫자타입은 64비트 배정밀도 부동소수점으로 구현되었다. 부호 1비트, 지수 11비트, 가수 52비트로 이루어져있다. 가수는 실제 숫자를 나타내는 부분인데, 52비트로 표현할 수 있는 최대 숫자는 `Number.MAX_SAFE_INTEGER`이다.
만약 `Number.MAX_SAFE_INTEGER`보다 더 큰 숫자를 변수에 할당하거나 비교할경우 원치않은 결과를 만나게 된다.

이런 특성때문에 풀이 1번이 통과하지 못했다. 해당 문제를 피하기 위해 숫자로 바꾼 뒤 1을 더하는방법 대신 배열의 요소에 접근에 +1을 해는 방법으로 통과할 수 있었다.

### 풀이 1

```js
// 실패
const plusOne = function (digits) {
  return [...(+digits.join('') + 1 + '')];
};
```

### 풀이 2

```js
// Runtime: 59 ms, faster than 92.10%
const plusOne = function (digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      break;
    }
    i--;
  }

  if (digits[0] === 0) digits.unshift(1);

  return digits;
};
```
