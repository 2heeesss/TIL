# [프로그래머스] K번째 수
## 풀이
1. commands 배열을 순회하며 조건에 맞게 자르기
2. 자른 배열 정렬하여 K번째 수 찾기
3. K번째 수가 담겨있는 배열 반환
## 풀이 복기
- for of, map 두가지 방법으로 순회 해 보았다.
- map 고차함수는 배열을 바로 리턴하기때문에 간결함.
### 풀이 1
```js
function solution(array, commands) {
    const res = [];

    for (const cmd of commands) {
        res.push(array
            .slice(cmd[0] - 1, cmd[1])
            .sort((a, b) => a - b)[cmd[2] - 1]);
    }
    return res;
}
```
### 풀이 2
```js
function solution(array, commands) {
    return commands.map(v => array
        .slice(v[0] - 1, v[1])
        .sort((a, b) => a - b)[v[2] - 1]
    );
} 
```