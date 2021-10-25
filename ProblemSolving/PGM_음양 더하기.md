# [프로그래머스] 음양 더하기

## 풀이
### 1.
- 주어진 배열을 map으로 순회하며, true일때는 +value, false 일때는 value를 저장하는 새로운 배열을 반환
- 새로운 배열을 reduce로 값을 더하기
### 2.
- map을 사용하지 않고 map 안에있는 로직을 reduce로 데려와 한번에 해결

### 풀이 1
```js
function solution(absolutes, signs) {
    return absolutes.map((val, i) => signs[i] ? val : -val).reduce((acc, cur) => acc + cur);
}
```

### 풀이 2
```js
function solution(absolutes, signs) {
    return absolutes.reduce((acc, cur, i) => signs[i] ? acc + cur : acc - cur, 0);
```