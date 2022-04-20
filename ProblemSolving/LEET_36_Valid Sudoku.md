# Leetcode - 36. Valid Sudoku

#배열#해쉬#매트릭스

## 풀이 복기

풀이 조건은 각각 행 확인, 열 확인, 3X3 박스 확인 3가지다. 앞의 두 조건은 이중for문으로 간단하게 찾을 수 있었고 3X3 박스 확인 로직이 중요하다고 생각된다.

3 X 3 박스는 정가운데 + 8방향으로 이동을 계산하면 되므로 `dy`, `dx` 배열로 8방향 + 가운데를 방문했다. 전체 스도쿠 관점에도 비슷하게 진행된다. 3 X 3 박스는 총 9개다. 이전과 마찬가지로 8방향(3칸이동 해야 하므로 \*3 해준다)이동하여 그 자리에서 박스가 스도쿠 가능한지 찾게 된다.

정리하자면 `[4,4]` 가운데 자리에서 3X3 박스의 가운데 좌표를 방문하고, 해당 좌표에서 스도쿠 가능한지 탐색한다.

가능한 스도쿠인지 확인하는 방법은 `Map`을 사용하여 로직을 작성했다. 방문한 값이 Map 에 있다면 false를 반환하고, 없다면 Map에 저장을 반복하는식이다.

첫번째 풀이에서 행 확인, 열 확인 로직이 중복되어서 함수로 분리하여 두번째 풀이로 작성했다. 한번의 2중 for문으로 행과 열 둘다 확인가능하므로 하나의 함수로 묶어놓았다. 3 X 3박스 확인하는 로직또한 같은 for문에서 풀 수 있으나, for문안에 너무 많은 코드를 작성하는것은 올바르지 않다고 판단하여 분리해서 작성했다.

### 풀이 1

```js
// Runtime: 72 ms, faster than 96.00%
const isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const map = new Map();
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') continue;
      if (map.has(board[i][j])) return false;
      map.set(board[i][j], 0);
    }
  }

  for (let i = 0; i < board.length; i++) {
    const map = new Map();
    for (let j = 0; j < board[i].length; j++) {
      if (board[j][i] === '.') continue;
      if (map.has(board[j][i])) return false;
      map.set(board[j][i], 0);
    }
  }

  const center = 4;
  const dy = [1, 0, -1, 1, 0, -1, 1, 0, -1];
  const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];

  for (let i = 0; i < dy.length; i++) {
    const centerSubBoxY = center + dy[i] * 3;
    const centerSubBoxX = center + dx[i] * 3;
    const map = new Map();

    for (let j = 0; j < dy.length; j++) {
      const currentY = centerSubBoxY + dy[j];
      const currentX = centerSubBoxX + dx[j];

      if (board[currentY][currentX] === '.') continue;
      if (map.has(board[currentY][currentX])) return false;
      map.set(board[currentY][currentX], 0);
    }
  }

  return true;
};
```

### 풀이 2

```js
// Runtime: 78 ms, faster than 88.22%
const isValidRowColumn = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    const columnMap = new Map();
    const rowMap = new Map();

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== '.' && columnMap.has(arr[i][j])) return false;
      columnMap.set(arr[i][j], 0);

      if (arr[j][i] !== '.' && rowMap.has(arr[j][i])) return false;
      rowMap.set(arr[j][i], 0);
    }
  }
  return true;
};

const isValidSubBox = function (arr) {
  const CENTER_IDX = 4;
  const dy = [1, 0, -1, 1, 0, -1, 1, 0, -1];
  const dx = [-1, -1, -1, 0, 0, 0, 1, 1, 1];

  for (let i = 0; i < dy.length; i++) {
    const centerSubBoxY = CENTER_IDX + dy[i] * 3;
    const centerSubBoxX = CENTER_IDX + dx[i] * 3;
    const map = new Map();

    for (let j = 0; j < dy.length; j++) {
      const currentY = centerSubBoxY + dy[j];
      const currentX = centerSubBoxX + dx[j];

      if (arr[currentY][currentX] !== '.' && map.has(arr[currentY][currentX])) return false;
      map.set(arr[currentY][currentX], 0);
    }
  }
  return true;
};

const isValidSudoku = function (board) {
  return isValidRowColumn(board) && isValidSubBox(board);
};
```
