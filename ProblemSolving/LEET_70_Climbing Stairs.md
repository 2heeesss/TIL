# Leetcode - 70. Climbing Stairs

#수학#다이나믹프로그래밍

## 풀이 복기

dp 점화식: A[n] = A[n-1] + A[n-2], 초기값: A[1] = 1, A[2] = 2

1. 길이가 n + 1인 배열을 만들고, 초기값을 할당한다
2. 배열을 순회하며 점화식을 만족하는 값을 할당한다. (3 ~ n)
3. 배열의 마지막 요소를 반환한다.

간단한 dp문제를 파악하여 점화식을 작성하였다. 코드를 작성할때 dp라고 무조건 배열을 먼저 선언하는 습관이 생긴것같다. 이 문제에서는 n이 45 이하로 크기가 작게 한정되어있었지만, 만약 n의 크기가 크다면 배열보다는 값으로 누적시켜가는것이 더 좋았을것같다.

### 풀이 1

```js
// Runtime: 64 ms, faster than 78.86%
const climbStairs = function (n) {
  const climbWays = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    climbWays[i] = i < 2 ? i + 1 : climbWays[i - 1] + climbWays[i - 2];
  }

  return climbWays[n - 1];
};
```
