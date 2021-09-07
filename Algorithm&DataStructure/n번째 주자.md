# n번째 주자
```txt
배열이 안에 여러배열이 주어졌을 때, 모든 배열 요소를 정렬한 배열을 리턴하는 함수를 만들자
```

```js
const solution = function (arr, num) {
    const list = arr
        .reduce((acc, cur) => acc.concat(cur)) 
        .sort((a, b) => a - b); 
    return list[num - 1];
}
```

