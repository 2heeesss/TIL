# Leetcode - 14. Longest Common Prefix

#문자열

## 풀이 복기

첫번째 풀이
입력받은 strs를 length기준으로 정렬하고, 길이가 가장 짧은 0번째 요소를 prefix 변수에 저장한다.
while문으로 반복하면서 prefix를 정규표현식으로 만들어 나머지 단어를 순회하며 맞는게 있는지 확인한다.
첫번재 방법으로 통과하지 못했는데, 예외사항을 생각하지 못했기 때문이다. 정규표현식의 test 메서드로 주어진 상황을 확인했는데 이 방법이 잘못되었다.
test메서드는 인덱스 순서에 상관없이 인수로 전달받은 값만 있으면 전부 true를 반환하기때문이다. 예를 들어 `['lll', 'elll']` 이런 배열이 주어졌을때도 true로 나오기때문에 전치사와 상관없이 나오게 된다.

두번째 풀이는 완전탐색을 활용해서 모든 경우를 탐색했다. strs 배열을 순회하며 조건에 맞는지 확인하게 되는데, 이때 불리언 값을 && 연산으로 누적해가면서 하나라도 false가 계산된다면 결과가 false로 나오게 작성했다.

### 풀이 1

```js
// 통과못함
const longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);
  let prefix = strs[0];

  while (prefix.length >= 0) {
    const reg = new RegExp(prefix);
    let isPrefix = true;

    for (let i = 1; i < strs.length; i++) {
      isPrefix = isPrefix && reg.test(strs[i]);
    }
    if (isPrefix) return prefix;

    prefix = prefix.slice(0, -1);
  }

  return prefix;
};
longestCommonPrefix(['flower', 'flow', 'flight']);
```

### 풀이 2

```js
// Runtime: 62 ms, faster than 93.53%
const longestCommonPrefix = function (strs) {
  strs.sort((a, b) => a.length - b.length);

  const shortStr = strs[0];
  let isPrefix = true;
  let result = '';

  for (let i = 0; i < shortStr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      isPrefix = isPrefix && shortStr[i] === strs[j][i];
    }
    if (!isPrefix) return result;
    result += shortStr[i];
  }
  return result;
};
```
