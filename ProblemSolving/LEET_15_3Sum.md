# Leetcode - 15. 3Sum

#배열#투포인터#정렬

## 풀이 복기

첫번째 풀이는 기존에 풀었던 Two Sum 풀이를 활용해서 로직을 작성했다. 고정된 하나의 요소와 함께 0을 만들 수 있는 다른 두개의 요소를 찾는다. 나머지 두개의 요소는 nums를 순회하며 해당요소를 Map에 저장, 만약 `필요한숫자 - 해당요소`가 Map에 존재한다면 set에 저장하게 된다. set에 저장할 때 배열의 원본을 넣게 된다면 다른배열과 주소값이 다르기 때문에 Set이 제 역할을 하지 못하게 된다. 그렇기 때문에 JSON 객체의 stringify, parse 메서드를 사용해 중복되지 않는 배열을 찾게 된다.

첫번째 풀이의 runtime이 3144ms로 매우 느리게 동작하였는데 이를 parse메서드 때문이라고 생각하여 parse를 사용하지않는 로직으로 변경해봤지만 여전히 2076ms로 느리게 동작하는것을 두번째 풀이에서 확인했다.

첫번째, 두번째 풀이가 느리게 동작한 이유를 다음과같이 판단했다 1. JSON 메서드 사용 2. 중복된 배열에서 최적화 불가능 3. Set, Map에 저장할 때마다 sort 수행
세번째 풀이는 투포인터 알고리즘을 활용하였다. 해당 풀이에서는 느리다고 판단한 부분을 제거하였기 때문에 빠르게 동작한것을 확인할 수 있었다.

### 풀이 1

```js
// 3144 ms
const threeSum = function (nums) {
  const set = new Set();

  if (nums.length < 3) return [];

  nums.forEach((num, idx) => {
    const fixed = num;
    const need = -num;

    const map = new Map();

    for (let i = idx + 1; i < nums.length; i++) {
      if (map.has(need - nums[i])) set.add(JSON.stringify([fixed, nums[i], need - nums[i]].sort((a, b) => a - b)));
      map.set(nums[i], true);
    }
  });

  return [...set].map(val => JSON.parse(val));
};
```

### 풀이 2

```js
// 2076 ms
const threeSum = function (nums) {
  const set = new Set();
  const res = [];

  if (nums.length < 3) return res;

  nums.sort((a, b) => a - b);

  nums.forEach((num, idx) => {
    const fixed = num;
    const need = -num;

    const map = new Map();

    for (let i = idx + 1; i < nums.length; i++) {
      if (map.has(need - nums[i]) && !set.has(JSON.stringify([fixed, nums[i], need - nums[i]]))) {
        set.add(JSON.stringify([fixed, nums[i], need - nums[i]]));
        res.push([fixed, nums[i], need - nums[i]].sort((a, b) => a - b));
      }
      map.set(nums[i], true);
    }
  });

  return res;
};
```

### 풀이 3

```js
// 239 ms
const threeSum = function (nums) {
  const res = [];

  if (nums.length < 3) return res;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (nums[j] === nums[j - 1]) j++;
        while (nums[k] === nums[k + 1]) k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return res;
};
```
