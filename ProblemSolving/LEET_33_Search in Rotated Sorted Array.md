# Leetcode - 33. Search in Rotated Sorted Array

#배열#이진탐색

## 풀이 복기

문제 조건에 시간복잡도가 `O(log n)`의 시간복잡도를 가지게 작성하라고 나와있었다. 이때문에 이진탐색을 사용해 한다는것은 바로 알았지만, 정렬되지 않은 상태에서 이진탐색을 수행하는과정에서 풀이를 떠올리기 어려웠다.

start와 end의 중간인 mid를 기준으로 왼쪽 또는 오른쪽 배열중 적어도 하나는 정렬된 배열을 갖게 된다. 이를 통해 정렬된 배열에 target이 있는지 찾는 로직을 작성해줌으로써 통과할 수 있었다.

### 풀이 1

```js
// Runtime: 79 ms, faster than 51.93%
const search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] <= target && target <= nums[end]) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
};
```

### 풀이 2

```js

```
