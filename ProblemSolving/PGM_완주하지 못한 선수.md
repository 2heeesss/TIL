# [프로그래머스] 완주하지 못한 선수
## 풀이
1. 마라톤에 참가한 인원 Map에 저장.
2. 동명이인 있다면 값 증가
3. 완주한 사람 순회하며 Map에서 값 빼기
4. Map을 순회하며 값이 1 이상일 경우 리턴
### 풀이 1
```js
function solution(participant, completion) {
    const marathonMap = new Map();
    for (const man of participant) {
        if (!marathonMap.get(man)) marathonMap.set(man, 1);
        else marathonMap.set(man, marathonMap.get(man) + 1);
    }
    for (const man of completion) {
        marathonMap.set(man, marathonMap.get(man) - 1);
    }
    for (const man of marathonMap) {
        if (man[1] > 0) return man[0]
    }
}
```
### 풀이 1 - 리팩토링
```js
function solution(participant, completion) {
    const marathonMap = new Map();
    for (const man of participant) {
        !!marathonMap.get(man) ? marathonMap.set(man, marathonMap.get(man) + 1) : marathonMap.set(man, 1)
    }
    for (const man of completion) {
        marathonMap.set(man, marathonMap.get(man) - 1);
    }
    for (const man of marathonMap) {
        if (man[1] > 0) return man[0]
    }
} 
```