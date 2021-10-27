# [프로그래머스] 실패율
#lv1#구현#배열#Map
## 풀이
1. 1~N까지 맵 만들기
2. 맵을 순회하며 stages와 key가 같을때 / stages와 key가 크거나 같을때 저장
3. 실패율이 높은 순으로 정렬하여 반환
## 풀이 복기
- 풀이 1은 map을 먼저 선언한 뒤 순회하며 값을 하나씩 확인하여 `notClear`과 `clear`을 업데이트 하며 저장
- 풀이 2는 `filter` 고차함수로 한번에 계산
- 풀이 1 최악의 시간은 500ms, 풀이 2 최악의 시간은 5800ms로 시간이 많이 차이난다.
- 풀이가 간편하다고 사용하는게 아닌 효율을 잘따져서 구현방법을 정해야할것같다.
### 풀이 1
```js
function solution(N, stages) {
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        map.set(i, 0);
    }

    for (const stage of map) {
        let clear = 0;
        let notClear = 0;
        for (const limit of stages) {
            if (stage[0] == limit) {
                notClear++;
            } else if (stage[0] < limit) {
                clear++;
            }
        }
        map.set(stage[0], notClear / (notClear + clear));
    }
    
    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(val => val[0]);
}
```
### 풀이 2
```js
function solution(N, stages) {
    const map = new Map();
    for (let i = 1; i <= N; i++) {
        let notClear = stages.filter(val => val == i).length;
        let clear = stages.filter(val => val > i).length;
        map.set(i, notClear / (notClear + clear));
    }
    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(val => val[0]);
}
```