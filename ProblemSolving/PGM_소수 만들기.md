# 프로그래머스_소수 만들기
## 풀이
1. 주어진 배열 n개에서 3개 뽑아 새로운 배열 만들기
2. 새로운 배열의 합이 소수인지 판별하기
## 풀이 설명
- 순열 구하는 재귀를 통해서 3개의 요소를 가진 배열 생성하기
- reduce()를 통해 배열의 합을 구하고, 그 값을 소수인지 `isPrime()`함수를 통해 확인
- 소수인지 확인할때, i=2부터 n의 제곱근 까지만 확인하면 나머지는 확인 하지않아도 판별 가능하다.
- 이렇게 되면 시간복잡도가 O(루트n)이라 더 효율적


```js
function solution(nums) {
    const res = [];
    let ans = 0;

    combination(nums, [], 0, 0, 3);
    for (const nums of res) {
        if (isPrime(nums.reduce((acc, cur) => acc + cur, 0))) ans += 1;
    }
    return ans;

    // 1. 주어진 배열 중 3개 고르기
    function combination(arr, data, depth, idx, reach) {
        if (depth == reach) {
            res.push(data.slice());
            return;
        }
        for (let i = idx; arr.length - i >= reach - depth; i++) {
            data[depth] = arr[i];
            combination(arr, data, depth + 1, i + 1, reach);
        }
    }

    // 2. 소수판별
    function isPrime(n) {
        if (n === 2) return true;
        for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }
}
```