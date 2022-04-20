# Leetcode - 34. Find First and Last Position of Element in Sorted Array

#배열#이진탐색

## 풀이 복기

문제 조건 시간복잡도 `O(log n)` 를 가져야 하므로 이진탐색 을 사용해서 찾아줬다. 첫번째 풀이는 이진탐색으로 `target` 값을 찾은 다음 앞, 뒤로 이동하면서 가장 마지막 인덱스를 찾아주는 방법을 택했다. 이때 최악의 상황(모든 배열의 요소가 target 값과 같을 경우) 전체 배열을 조회하게 되므로 두번째 방법으로도 풀었다.

두번째 방법은 이진탐색을 두번수행하여 시작, 끝 인덱스 값을 찾게 된다. 여기서 런타임은 풀이 1번이 더 빠른것으로 나온다. `[target, target, target, ...]` 요소의 개수가 10^5인 이러한 배열을 탐색할 경우 풀이 2번이 더 빠르게 동작하지만, 위와같이 특수한 상황이 아니라면 풀이 1번이 더 빠르게 동작하는것으로 해석했다.

### 풀이 1

```js
// Runtime: 56 ms, faster than 97.30%
const searchRange = function (nums, target) {
  const getPosition = function (index) {
    let start = index;
    let end = index;

    while (nums[start - 1] === target) {
      start--;
    }
    while (nums[end + 1] === target) {
      end++;
    }
    return [start, end];
  };

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) return getPosition(mid);

    if (target > nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  return [-1, -1];
};
```

### 풀이 2

```js
// Runtime: 68 ms, faster than 75.68%
const searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target >= nums[mid]) left = mid + 1;
    else right = mid - 1;
  }

  if (nums[right] !== target) return [-1, -1];

  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target <= nums[mid]) r = mid - 1;
    else l = mid + 1;
  }

  return [l, right];
};
```
