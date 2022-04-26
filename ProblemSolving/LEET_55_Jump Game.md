# Leetcode - 55. Jump Game

#배열#그리디#다이나믹프로그래밍

## 풀이 복기

첫번째 풀이는 통과하긴 했지만 runtime이 5736ms로 매우 느리게 동작한다. 이는 모든 요소의 값(1~n) 대하여 방문처리를 하였기 때문이다. 배열의 개수가 많고, 값이 클 경우 속도가 느리므로 좋은 풀이는 아니다. 여기서 안쪽의 for문에 조건을 건다면 시간을 줄일 수 있다. 하지만 그래도 오래걸리는것은 마찬가지다.

첫번째 풀이는 가능한 경우를 찾는방법이였다면 두번째 풀이는 가능하지 않은경우를 찾는 방법이다. 이 방법으로 통과하지 못했다.

마지막풀이는 갈 수 있는 최댓값을 누적시켜나가는 방법으로 작성했다. 세번째 풀이에서 빨리 탈출할 수 있는 조건을 추가해 네번째 풀이가 나왔는데 더 빠르게 통과한것을 알 수 있다.

문제를 보자마자 dp유형의 문제스럽게 생겨서 여러 점화식을 떠올렸지만 정답에 도달하는데는 시간이 오래걸렸다. dp와 그리디 유형의 문제는 아직 학습이 부족하다고 판단된다.

### 풀이 1

```js
// Runtime: 5736 ms, faster than 5.19%
const canJump = function (nums) {
  const visited = new Array(nums.length).fill(false);
  visited[0] = true;

  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) continue;

    for (let j = 1; j <= nums[i]; j++) {
      visited[i + j] = true;
    }
  }

  return visited[visited.length - 1];
};
```

### 풀이 2

```js
// 실패
const canJump = function (nums) {
  if (nums.length === 1) return true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] + i >= nums.length - 1) return true;
  }
  return false;
};
```

### 풀이 3

```js
// Runtime: 108 ms, faster than 58.07%
const canJump = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(max, nums[i] + i);
  }
  return true;
};
```

### 풀이 4

```js
// Runtime: 83 ms, faster than 81.42%
const canJump = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (max < i) return false;
    if (max >= nums.length - 1) return true;
    max = Math.max(max, nums[i] + i);
  }
  return true;
};
```
