# Leetcode - 35_Search insert position

#array#이진탐색#선형탐색

## 풀이

- 풀이 1, 2는 선형탐색으로 맨 앞 인덱스부터 순차적으로 탐색하면서 값을 찾아나가는 방법으로 풀었다.
- 풀이 3, 4는 이진탐색을 활용하여 조금 더 효율적으로 타겟넘버를 찾았다.

## 복기

답을 찾기위한 시간이 생각보다 차이가 나지않았다. 선형탐색(80ms, 68ms), 이진탐색(60ms, 69ms). 이는 문제 데이터셋 때문에 차이가 많이 발생하지않은것으로 추정된다. 만약 데이터셋 자체가 매우 크다면 이진탐색이 시간이 훨씬 더 적게 걸렸을것으로 판단됨. (O(n)시간복잡도 vs O(logn)시간복잡도)

맨처음부터 이진탐색방법을 떠올렸으니 오랜만에 구현해서인지 바로 구현하지 못했다. 충분한 연습이 필요한것같다. 또한, 이진탐색을 구현하는 두가지방법 재귀, while문 둘 다 제대로 알고있자.

### 풀이 1

- 80ms

```js
const searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return nums.length;
};
```

### 풀이 2

- 68ms

```js
const searchInsert = function (nums, target) {
  return nums.filter(num => num < target).length;
};
```

### 풀이 3

- 60ms

```js
const binarySearch = function (array, target, start, end) {
  if (start > end) return start;

  const mid = Math.floor((start + end) / 2);
  if (target === array[mid]) return mid;
  if (target < array[mid]) return binarySearch(array, target, start, mid - 1);
  if (target > array[mid]) return binarySearch(array, target, mid + 1, end);
};

const searchInsert = function (nums, target) {
  const start = 0;
  const end = nums.length - 1;
  return binarySearch(nums, target, start, end);
};
```

### 풀이 4

- 69ms

```js
const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (target === nums[mid]) return mid;
    if (target < nums[mid]) end = mid - 1;
    if (target > nums[mid]) start = mid + 1;
  }
  return start;
};
```
