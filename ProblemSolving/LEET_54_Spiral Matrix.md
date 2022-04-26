# Leetcode - 54. Spiral Matrix

#배열#시뮬레이션

## 풀이 복기

1. matrix의 길이 만큼 반복한다
2. 오 -> 아래 -> 왼 -> 위 를 반복한다
   - if) visited[다음] === true or matrix[다음] === undefined : 다음 방향
   - else) 방향 그대로
3. 방문한 순서대로 res 배열에 저장

visted 배열로 방문처리를 하며, 범위에서 벗어나거나 이미 방문을 했을 경우 방향을 틀어서 움직이도록 작성했다.

다른 사람의 풀이들을 보았을 때 shift() 메서드를 사용하는 등 원본 배열 깎아가며 res 배열에 추가하며 푼 방식이 많았다. 나도 이런 방식을 떠올리지 못한것은 아니다. 하지만, 원본배열을 훼손시키지 않으면서 알맞은 값을 반환하는것이 더 좋은 방법이라고 생각했다. 그렇기 때문에 visited 배열을 만들어 방문을 확인했다.

풀이를 떠올리는것은 어렵지 않았지만 방향을 바꾸는 조건에서 실수가 많아 푸는 시간이 20분가량 늦어졌다. 실제 코딩테스트에서 이런 실수를 한다면 치명적일것이다. 실수하지 않는것도 실력인만큼 연습하자.

### 풀이 1

```js
// Runtime: 60 ms, faster than 89.83%
const spiralOrder = function (matrix) {
  const M = matrix.length;
  const N = matrix[0].length;
  // Creating a 2D Array for Visit Processing
  const visited = Array.from(Array(M), () => new Array(N).fill(false));

  let i = 0;
  let currentY = 0;
  let currentX = 0;

  // direction vector
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const res = [];

  while (res.length < M * N) {
    visited[currentY][currentX] = true;
    res.push([matrix[currentY][currentX]]);

    const nextY = currentY + dy[i % 4];
    const nextX = currentX + dx[i % 4];

    if (nextY < 0 || nextY >= M || nextX < 0 || nextX >= N || visited[nextY][nextX]) {
      // change direction
      i++;
    }
    currentY += dy[i % 4];
    currentX += dx[i % 4];
  }

  return res;
};
```
