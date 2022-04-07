# Leetcode - 2. Longest Substring Without Repeating Characters

#해쉬#문자열#슬라이딩윈도우

## 풀이 복기

첫번째풀이는 문자열을 순회하며 요소들을 map에 저장하고, 만약 요소가 map에 존재한다면 map을 클리어 한 뒤 다시 저장하는 방식으로 작성했다. 하지만 여기에는 `"dvdf"`와 같은 문자열이 들어왔을 때 예외 사항이 발생하므로 통과하지 못했다.

두번째 풀이는 슬라이딩 윈도우 기법을 사용해서 풀었다. start라는 포인터를 가지고 start ~ 현재 인덱스 까지의 길이를 저장한다. 최대 길이가 되도록 Max값으로 바꿔주는 방식으로 풀었다. 처음 작성할 때 `start = map.get(s[i]) + 1`이렇게 로직을 작성했었다. `"abcbac"`와 같은 문자열이 들어왔을 때 4번째 요소 `a`에서 start가 0 + 1 이 되어버려 기존 start 포인터 보다 오히려 앞으로 이동하는 경우가 발생한다. 이때문에 start와 map.get(s[i])+1를 비교하여 더 큰 값으로 바꿔주는 로직이 필요했다.

세번째 풀이는 두번째 풀이에서 문자열을 배열로 변환 한 뒤, reduce로 값을 한번에 뽑아내는 방식을 사용했다. for문을 사용한 두번째 풀이보다 reduce를 사용했을때 선언적인 코드라고 생각하여 작성해봤다.

### 풀이 1

```js
// 풀이 실패
const lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let longestSubString = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      longestSubString = Math.max(longestSubString, map.size);
      map.clear();
      map.set(s[i], true);
    } else {
      map.set(s[i], true);
    }
  }

  return Math.max(longestSubString, map.size);
};
```

### 풀이 2

```js
// 123 ms
const lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let maxLen = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    map.set(s[i], i);

    maxLen = Math.max(i - start + 1, maxLen);
  }
  return maxLen;
};
```

### 풀이 3

```js
// 94 ms
const lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let start = 0;

  return [...s].reduce((mLen, char, idx) => {
    if (map.has(char)) start = Math.max(map.get(char) + 1, start);
    map.set(char, idx);

    return Math.max(idx - start + 1, mLen);
  }, 0);
};
```
