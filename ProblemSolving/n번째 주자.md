# n번째 주자
```txt
배열이 안에 여러배열이 주어졌을 때, 모든 배열 요소를 정렬한 배열을 리턴하는 함수를 만들자
```

## 1. reduce()
```js
const solution = function (arr, num) {
    const list = arr
        .reduce((acc, cur) => acc.concat(cur)) 
        .sort((a, b) => a - b); 
    return list[num - 1];
}
```
- reduce()로 큰 배열을 순회하며 작은 배열을 cur로 받는다
- acc 리턴 값에 작은 배열 cur을 concat()으로 합친다
- 합쳐진 배열을 sort()메서드로 정렬한다


## 2. flat()
```js
const solution = function (arr, num) {
    const list = arr
        .reduce((acc, cur) => acc.concat(cur)) 
        .sort((a, b) => a - b); 
    return list[num - 1];
}
```
- flat()으로 배열내에 있는 작은 배열을 하나로 합친다.
    - flat() 메서드는 배열 메서드로 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 반환
    - 매개변수인 depth는 optional이며
    - 지정하지 않았을 경우 1의 깊이만큼 동작
    - 깊이에 상관없이 모든 작은 배열을 하나로 이어붙이고 싶다면 Infinity를 넣어준다
    - `list.flat(depth)`
- 합쳐진 배열을 sort()로 정렬한다.