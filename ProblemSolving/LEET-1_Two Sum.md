# Leetcode - 1.Two Sum

#Array

## 풀이

- 풀이 1.
  2중 for문으로 순회하면서 각 인덱스 (i, j)번째 요소의 합이 target 숫자와 같을 때 return
- 풀이 2.
  1중 for문으로 순회하며 target숫자와 현재 인덱스(i)의 차이가 Map 안에 존재하고있을 시 해당 값들을 리턴하고 만약 Map에 존재하지 않는다면 계속 값을 저장한다

## 복기

- 맨처음 문제를 봤을 때 2중for문으로 순회하는것밖에 떠올리지 못했다. 통과는했지만 효율적인 풀이라고 생각하지는 않는다.
- 두번째 풀이는 2중 for문을 하나의 for문으로 줄여서 풀었기때문에 첫번째보다는 효율적인 풀이라고 생각한다.
- 나머지 값을 Map에 저장시켜나가는 방법 -> 맨처음 생각하지는 못했지만 여러 문제를 겪고 여러 방법을 생각하는 연습이 필요할듯하다.

### 풀이 1

```js
// 112ms
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (firstNum + nums[j] === target) return [i, j];
    }
  }
};
```

### 풀이 2

```js
// 75ms
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const restNum = target - nums[i];
    if (map.get(restNum) !== undefined) return [i, map.get(restNum)];

    map.set(nums[i], i);
  }
};
```
