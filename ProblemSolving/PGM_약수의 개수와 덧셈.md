# [프로그래머스] 약수의 개수와 덧셈
## 풀이
1. left 부터 right까지 순회하며 약수의 개수 세기
2. 약수의 개수가 홀수라면 i를 빼고, 약수의 개수가 짝수라면 i를 더하기

## 풀이 복기
- 풀이 1번은 약수의 개수를 for문을 통해 하나씩 확인하는 방법을 사용했다.
- 위와같은 방법으로 풀었을 때도 성능은 나쁘지 않지만, 두번째 세번째 방법이 성능이 더 좋았다.
- `약수의 개수가 홀수일 때 제곱근은 정수`임을 사용해 다시 문제를 풀었다.
- 두번째 방법에서 정수임을 판별할때 1로나눈 나머지가 0인지 확인하는 방법을 사용했다.
- 하지만, 세번째 방법인 `Number.isInteger()`메서드를 사용하면 더 쉽게 판별 가능했다.
### 풀이 1
```js
function solution(left, right) {
    let res = 0;

    for (let i = left; i <= right; i++) {
        isDivisor(i) % 2 === 0 ? res += i : res -= i;
    }
    return res;

    function isDivisor(n) {
        let cnt = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                cnt++;
            }
        }
        return cnt;
    }
}
```
### 풀이 2
```js
function solution(left, right) {
    // 약수의 개수가 홀수일 때 제곱근은 정수
    let res = 0;
    for (let i = left; i <= right; i++) {
        if (Math.sqrt(i) % 1 === 0) {
            res -= i;
        } else {
            res += i;
        }
    }
    return res;
}
```
### 풀이 3
```js
function solution(left, right) {
    // 약수의 개수가 홀수일 때 제곱근은 정수
    let res = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            res -= i;
        } else {
            res += i;
        }
    }
    return res;
}
```