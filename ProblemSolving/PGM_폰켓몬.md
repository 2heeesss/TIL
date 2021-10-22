# 프로그래머스 LV1 폰켓몬
## 풀이
1. 각 포켓몬을 map또는 set에 저장
2. map 또는 set의 사이즈가 2/n보다 크다면 2/n반환
3. 아니라면 사이즈 반환
## 풀이 복기
- 문제를 보고 배열 또는 Map을 사용해 풀어야겠다고 생각했다.
- 다 풀고나서 보니 Set이 더 알맞은 자료구조인것같아 Set을 사용해 구현하니 더 간단한 풀이가 되었다.
- 각 문제조건을 확인하고 꼭 알맞은 자료구조를 사용하자!

### 풀이 1
```js
function solution(nums) {
    const HALF_NUM = parseInt(nums.length / 2);
    const map = new Map();

    for (const pok of nums) {
        map.get(pok) ? map.set(pok, map.get(pok) + 1) : map.set(pok, 1);
    }

    return map.size > HALF_NUM ? HALF_NUM : map.size;
}
```
### 풀이 2
```js
function solution(nums) {
    const HALF_NUM = parseInt(nums.length / 2);
    const set = new Set(nums);

    return set.size > HALF_NUM ? HALF_NUM : set.size;
}
```