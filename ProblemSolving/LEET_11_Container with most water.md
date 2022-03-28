# Leetcode - 11_Container with most water

#배열#투포인터

## 풀이

첫번째 풀이는 완전탐색을 사용해서 풀었다. 배열을 두번씩 순회하며(set으로 정렬된 배열, 원본배열) 넓이를 구하는 방법을 사용.

두번째 풀이는 투포인터를 사용해서 left 포인터는 인덱스 0부터 시작, right 포인터는 가장 마지막 인덱스부터 시작하여 넓이를 구하고 최댓값을 비교하며 저장.

## 복기

데이터의 최대 개수가 10^5이라 완전탐색으로 풀 시 시간초과가 날것임을 알고있었지만 다른 풀이가 생각나지 않아서 그냥 풀었다. 역시 시간초과가 난것을 알 수 있다.

문제에서 연속된 데이터 구간을 처리할때 투포인터를 사용하면 O(n) 시간복잡도로 풀 수 있으므로 유형을 익히는 연습이 필요할듯하다.

### 풀이 1

```js
// 시간초과
const maxArea = function (height) {
  const sortedHeight = [...new Set(height)].sort();
  const res = Array.from(Array(sortedHeight.length + 1), () => Array(height.length + 1).fill(0));

  for (let i = 0; i < sortedHeight.length; i++) {
    res[i + 1][0] = sortedHeight[i];
  }
  for (let i = 0; i < height.length; i++) {
    res[0][i + 1] = height[i];
  }

  for (let i = 1; i < res.length; i++) {
    for (let j = 1; j < res[i].length; j++) {
      if (res[0][j] >= res[i][0]) res[i][j] = true;
    }
  }

  const result = res.map((arr, i) => {
    const a = arr.indexOf(true);
    const b = arr.lastIndexOf(true);
    return (b - a) * arr[0];
  });

  return Math.max(...result, 0);
};
```

### 풀이 2

```js
// 132ms
const maxArea = function (height) {
  let res = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    res = Math.max(res, area);

    height[left] < height[right] ? left++ : right--;
  }
  return res;
};
```
