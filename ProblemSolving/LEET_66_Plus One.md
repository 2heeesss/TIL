# Leetcode - 66. Plus One

#다이나믹프로그래밍

## 풀이 복기

1. m x n grid 만들기
2. 1번째 row, 1번째 column 1로 채워두기
3. 2중 반복문으로 grid 전체 순회하기
   - 1번째 row, 1번째 column은 조회할 필요 없음
4. 가장 끝값 반환

첫번째 풀이에서는 억지로 forEach를 사용한것같다. for 문을 최대한 사용하고싶지 않아서 forEach, map으로 각각 로직을 작성해봤지만, 코드의 가독성이 떨어진다고 생각되었다. 그래서 다시 2중 for문을 사용하는것으로 바꿨다.

### 풀이 1

```js
// Runtime: 79 ms, faster than 52.40%
const uniquePaths = function (m, n) {
  const grid = Array.from(Array(m), () => Array(n).fill(1));

  grid.forEach((rowArr, rowIdx, arr) =>
    rowArr.forEach((_, columnIdx) => {
      arr[rowIdx][columnIdx] = arr[rowIdx - 1][columnIdx] + arr[rowIdx][columnIdx - 1];
    })
  );

  return grid[m - 1][n - 1];
};
```

### 풀이 2

```js
// Runtime: 78 ms, faster than 53.95%
const uniquePaths = function (m, n) {
  const grid = Array.from(Array(m), () => Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  return grid[m - 1][n - 1];
};
```
