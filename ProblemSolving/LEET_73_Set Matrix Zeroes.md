# Leetcode - 73. Set Matrix Zeroes

#배열#해쉬

## 풀이 복기

1. matrix를 순회하며 rowSet, columnSet에 0 인덱스 각각 저장.
2. matrix를 순회하며 rowSet, columnSet의 값에 도달했을 때 0으로 재할당

처음에는 전체를 순회하며 만나는 0마다 왼쪽, 오른쪽, 위, 아래 전체 줄을 0으로 만들면 안되나? 라고 생각했다. 하지만 이렇게 푼다면 모든 matrix가 0으로 가득차게 된다. 어떤게 기존에 있던 0인지 모르기 때문이다.

두번째는 빈 배열을 만들고 값을 0으로 가지는 matrix 인덱스 좌표값을 저장해야지 라고 생각했다. 이 방법도 나쁘지는 않지만 중복된 row, column이 발생하기때문에 공간복잡도와 연산시간에 대해 좋지 않다고 판단했다.

위 문제를 해결하기 위해 row, column을 저장하는 Set을 만들어 조회하며 로직을 완성했다. 공간복잡도 또한 중요하다. 시간복잡도만 생각하는게아닌 공간까지 고려하여 최선의 풀이를 작성하자.

### 풀이 1

```js
// Runtime: 96 ms, faster than 68.40%
const setZeroes = function (matrix) {
  const rowSet = new Set();
  const columnSet = new Set();
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        rowSet.add(i);
        columnSet.add(j);
      }
    }
  }

  [...rowSet].forEach(row => {
    for (let i = 0; i < n; i++) {
      matrix[row][i] = 0;
    }
  });

  [...columnSet].forEach(column => {
    for (let i = 0; i < m; i++) {
      matrix[i][column] = 0;
    }
  });
};
```
