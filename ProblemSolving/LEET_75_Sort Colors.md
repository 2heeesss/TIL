# Leetcode - 75. Sort Colors

#배열#정렬

## 풀이 복기

1. red, white, blue의 개수를 센다
2. nums를 순회하며
   - 0 ~ red-1 인덱스에는 0
   - red ~ red + white -1 인덱스에는 1
   - red + white ~ nums.length - 1 인덱스에는 2

저장된 요소가 0, 1, 2로 3가지 밖에 되지않기 때문에 카운팅 정렬과 비슷한 방법으로 풀었다. 만약 0, 1, 2 이외에 랜덤한 값이 들어온다면 이런 방법은 사용하지 못할것이다. 공간복잡도가 너무 증가하기때문. 그럴 경우에는 퀵소트를 사용해서 정렬할것이다. 카운팅 소트의 시간복잡도 보다는 느리지만 공간복잡도가 낮기때문이다.

### 풀이 1

```js
// Runtime: 88 ms, faster than 36.62%
const sortColors = function (nums) {
  const redCount = nums.filter(num => num === 0).length;
  const whiteCount = nums.filter(num => num === 1).length;
  const blueCount = nums.filter(num => num === 2).length;

  for (let i = 0; i < nums.length; i++) {
    if (i < redCount) {
      nums[i] = 0;
    } else if (redCount <= i && i < redCount + whiteCount) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
```

### 풀이 2

```js
// Runtime: 58 ms, faster than 93.24%
const sortColors = function (nums) {
  const redCount = nums.filter(num => num === 0).length;
  const whiteCount = nums.filter(num => num === 1).length;

  for (let i = 0; i < nums.length; i++) {
    if (i < redCount) {
      nums[i] = 0;
    } else if (i < redCount + whiteCount) {
      nums[i] = 1;
    } else {
      nums[i] = 2;
    }
  }
};
```
