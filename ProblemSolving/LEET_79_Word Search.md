# Leetcode - 79. Word Search

#배열#백트래킹

## 풀이 복기

1. board를 순회
   - if) word[0] === board[현재] : dfs(현재)
2. dfs
   - visited 배열 만들고 방문할때마다 true
   - 반환조건: depth === word.length, 이미 방문한경우, 원하는 문자가 아닐경우
   - 방향벡터로 다음 dfs

가장 기본적인 DFS문제인데 실수가 너무 많았다. 만약 코딩테스트에서 이런 문제가 나왔으면 정답인줄알고 제출했을것같다.
DFS문제를 풀때는 다음을 확인하자

- 주어진 배열의 크기가 1일때 케이스 생각하기
- push 또는 방문처리를 했다면 `reset`하는 로직 꼭 추가하기
- 인덱스는 1이 아닌 0부터 시작한다
- 쓸모없는 매개변수 만들지 않기

### 풀이 1

```js
// Runtime: 609 ms, faster than 54.29%
const exist = function (board, word) {
  if (board.length === 1 && board[0].length === 1) return board[0][0] === word;

  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let isExist = false;

  const dfs = function (row, column, visited, depth) {
    if (depth >= word.length) {
      isExist = true;
      return;
    }
    if (board[row][column] !== word[depth]) return;
    if (visited[row][column]) return;

    visited[row][column] = true;

    for (let i = 0; i < 4; i++) {
      const nextRow = row + dy[i];
      const nextColumn = column + dx[i];

      if (nextRow >= 0 && nextRow < board.length && nextColumn >= 0 && nextColumn < board[0].length) {
        dfs(nextRow, nextColumn, visited, depth + 1);
      }
    }
    visited[row][column] = false;
  };

  board.forEach((chars, row) => {
    chars.forEach((char, column) => {
      const visited = Array.from(new Array(board.length), () => new Array(board[0].length).fill(false));
      if (char === word[0]) dfs(row, column, visited, 0);
    });
  });
  return isExist;
};
```

### 풀이 2

```js
// Runtime: 526 ms, faster than 65.12%
const exist = function (board, word) {
  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let isExist = false;

  const inRange = function (row, column) {
    return row >= 0 && row < board.length && column >= 0 && column < board[0].length;
  };

  const dfs = function (row, column, visited, depth) {
    if (board[row][column] !== word[depth]) return;
    if (visited[row][column]) return;
    if (depth === word.length - 1) {
      isExist = true;
      return;
    }
    visited[row][column] = true;

    for (let i = 0; i < 4; i++) {
      const nextRow = row + dy[i];
      const nextColumn = column + dx[i];

      if (inRange(nextRow, nextColumn)) dfs(nextRow, nextColumn, visited, depth + 1);
    }
    visited[row][column] = false;
  };

  board.forEach((chars, row) => {
    chars.forEach((char, column) => {
      const visited = Array.from(new Array(board.length), () => new Array(board[0].length).fill(false));
      if (char === word[0]) dfs(row, column, visited, 0);
    });
  });
  return isExist;
};
```
