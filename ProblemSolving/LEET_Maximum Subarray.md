# [leetcode] Maximum Subarray

#DP#배열

## 풀이

-   주어진 배열 nums를 순회하며 res배열에 값 저장
-   `nums[i] + res[i-1]`과 `nums[i]` 값 중 더 큰값을 저장
-   `res`배열의 가장 큰 값 리턴

## 풀이 복기

-   DP 문제라고 생각하는데 시간이 걸렸다.
-   처음에는 배열을 생성하지않고 그리디로 풀려고 했지만 실패했다.
-   문제를 보고 유형을 파악하는게 중요하다.
-   DP문제라고 판단된다면 점화식을 빠르게 작성하자.

### 풀이 1

```js
let maxSubArray = function (nums) {
    const res = new Array(nums.length);
    res[0] = nums[0];

    for (let i = 1, len = nums.length; i < len; i++) {
        res[i] = res[i - 1] + nums[i] > nums[i] ? res[i - 1] + nums[i] : nums[i];
    }
    return Math.max(...res);
};
```

### 풀이 2

```js
let maxSubArray = function (nums) {
    const res = new Array(nums.length).fill(nums[0]);

    nums.forEach((val, i) => {
        res[i] = res[i - 1] + val > val ? res[i - 1] + val : val;
    });

    return Math.max(...res);
};
```

### 풀이 3

```js
let maxSubArray = function (nums) {
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }

    return Math.max(...nums);
};
```
