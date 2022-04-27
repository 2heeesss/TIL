# Leetcode - 56. Merge Intervals

#배열#정렬

## 풀이 복기

1. intervals 내부 배열의 첫번째 요소로 정렬
2. intervals 배열 순회
   - if) intervals[현재][시작] 값이 start ~ end
   - if) interval[현재][끝] 값이 end보다 크다면
     - true: end = interval[현재][끝]
   - false: [start, end] 저장, start = interval[현재][시작], end = interval[현재][끝]

내부 배열의 0번째 인덱스로 정렬만 한다면 쉽게 풀수있는 문제다. 첫번째 풀이와 두번째 풀이 모두 무리없이 통과하였는다. 다만 첫번째 풀이에서 배열 디스트럭쳐링을 해서 코드를 깔끔하게 하는것을 놓치고 제출했다. 통과하는게 우선이지만 로직이 완성되었다고 생각이 들면 코드를 깔끔하게 만들자.

### 풀이 1

```js
// Runtime: 97 ms, faster than 89.69 %
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let idx = 1;
  let start = intervals[0][0];
  let end = intervals[0][1];
  const res = [];

  while (idx < intervals.length) {
    if (start <= intervals[idx][0] && intervals[idx][0] <= end) {
      if (intervals[idx][1] >= end) end = intervals[idx][1];
    } else {
      res.push([start, end]);
      start = intervals[idx][0];
      end = intervals[idx][1];
    }
    idx++;
  }
  res.push([start, end]);

  return res;
};
```

### 풀이 2

```js
// Runtime: 106 ms, faster than 81.33%
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let idx = 1;
  let [start, end] = intervals[0];
  const res = [];

  while (idx < intervals.length) {
    if (intervals[idx][0] <= end) {
      if (intervals[idx][1] >= end) [_, end] = intervals[idx];
    } else {
      res.push([start, end]);
      [start, end] = intervals[idx];
    }
    idx++;
  }
  res.push([start, end]);

  return res;
};
```
