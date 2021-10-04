# Map

- 다양한 자료형의 key를 허용하고, key-value 형태의 자료형이 저장 가능한 Collection
- Map은 Object 대비 다양한 key의 사용을 허가
- 값의 추가/삭제 시 메서드를 통한 수행이 필요
- 대표 속성 및 메서드
    - 생성자: `new Map()`
    - 개수 확인: `Map.size`
    - 요소 추가: `Map.set(key, value)`
    - 요소 접근: `Map.get(key)`
    - 요소 삭제: `Map.delete(key)`
    - 전체 삭제: `Map.clear()`
    - 요소 존재 여부 확인: `Map.has(key)`
    - 그 밖의 메서드: `Map.keys()`, `Map.values()`, `Map.entries()`

## 요소 추가/삭제

```jsx
let map = new Map();

map.set('name', 'LEE');
map.set('number', 123);

console.log(map.get('number')); // 123
console.log(map.size); // 2

map.delete('name');

console.log(map.size); // 1

map.clear();

console.log(map.size); // 0

map.set('1', 1).set('2', 2).set('3', 3);
console.log(map) // Map { '1' => 1, '2' => 2, '3' => 3 }
```

## Map 반복문

```jsx
let map = new Map();
map.set('1', 1).set('2', 2).set('3', 3);

for (let val of map) {
    console.log(val);
}
// [ '1', 1 ]
// [ '2', 2 ]
// [ '3', 3 ]

for (let key of map.keys()) {
    console.log(key)
}
// 1
// 2
// 3

for (let values of map.values()) {
    console.log(values)
}
// 1
// 2
// 3
```

## Map, Object 변환

- `Object.entries(Object)`, `Object.fromEntries(Map)`를 통해 Map과 Object간 변환이 가능

```jsx
let map = new Map();
map.set('1', 1).set('2', 2).set('3', 3);
console.log(map) // Map { '1' => 1, '2' => 2, '3' => 3 }

let obj = Object.fromEntries(map);
console.log(obj) // { '1': 1, '2': 2, '3': 3 }

let list = Object.entries(obj);
console.log(list); // [ [ '1', 1 ], [ '2', 2 ], [ '3', 3 ] ]

let newMap = new Map(list);
console.log(newMap) // Map { '1' => 1, '2' => 2, '3' => 3 }
```