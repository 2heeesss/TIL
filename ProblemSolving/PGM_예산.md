# [프로그래머스] 예산

#구현#배열

## 풀이

-   입력받은 배열 d를 입력받아 오름차순으로 정렬
-   정렬된 배열을 순회하며
    -   budget - 현재값이 0보다 작다면 -> 저장된 값 + 0
    -   budget - 현재값이 0보다 크거나 같다면 -> 누적 값 + 1

```js
function solution(d, budget) {
    return d
        .sort((a, b) => a - b)
        .reduce((acc, cur) => {
            if (budget - cur < 0) {
                return acc;
            } else {
                budget -= cur;
                return (acc += 1);
            }
        }, 0);
}
```
