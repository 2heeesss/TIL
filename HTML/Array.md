# 배열

- 여러 개채 값을 순차적으로 나열한 자료구조
- 배열 내 값을 요소라고 하며, 배열 요소는 index로 접근

## 배열 선언

- `new Array()` 혹은 `[]`를 통해 선언하며, 사이즈 혹은 값을 입력하여 초기화 가능

```jsx
let arr1 = new Array();
let arr2 = [];
```

## 배열의 실체

- 자바스크립트에서 배열은 다른 언어에서 말하는 일반적인 배열이 아닌 Hash 기반의 객체
- 메모리가 연속적인 밀집 배열(dense array)가 아닌 비 연속적인 희소 배열(sparse array)

## 속성과 메서드

### 배열 타입 확인

- `Array.isArray(value)`

```jsx
let arr = new Array();
let str = 'haha';
let num = 123;
console.log(Array.isArray(arr)); // true
console.log(Array.isArray(str)); // false
console.log(Array.isArray(num)); // false
```

### 배열 요소 삭제

- 배열 일부 요소 삭제: `delete array[index]`
- 삭제해도 배열 사이즈가 그대로

```jsx
let arr = ['one', 'two', 'three'];
console.log(arr) // [ 'one', 'two', 'three' ]
delete arr[0];
console.log(arr) // [ <1 empty item>, 'two', 'three' ]
```

## 배열 조작

- 배열 추가 / 삭제 (LIFO)
    - `Array.push(element)`, `Array.pop()`
- 배열 추가 / 삭제 (FIFO)
    - `Array.unshift(element)`, `Array.shift()`
    
    ```jsx
    let arr = ['one', 'two', 'three'];
    
    arr.push('four');
    console.log(arr); // [ 'one', 'two', 'three', 'four' ]
    arr.pop();
    console.log(arr); // [ 'one', 'two', 'three' ]
    
    arr.unshift('zero');
    console.log(arr); // [ 'zero', 'one', 'two', 'three' ]
    arr.shift();
    console.log(arr) // [ 'one', 'two', 'three' ]
    ```
    
- 배열 삭제 / 변경 (index)
    - `Array.splice(index[, deleteCount, elem1, ... , elemN])`
    - 매개변수로 받은 인덱스 이후로 짤라서 배열을 리턴
    
    ```jsx
    let arr = ['one', 'two', 'three'];
    
    // 기본적인 배열 자르기
    let arr2 = arr.splice(1);
    console.log(arr); // [ 'one' ]
    console.log(arr2); // [ 'two', 'three' ] 
    
    // 개수를 정해서 배열 자르기
    arr = ['one', 'two', 'three'];
    let arr3 = arr.splice(1, 1);
    console.log(arr); // [ 'one', 'three' ]
    console.log(arr3); // [ 'two' ]
    
    // 배열 자른 후 원하는 값 추가하기
    arr = ['one', 'two', 'three'];
    let arr4 = arr.splice(1, 1, 'new two');
    // 삭제된 값 위치에 새로운 값이 추가됨
    console.log(arr); // [ 'one', 'new two', 'three' ]
    console.log(arr4); // [ 'two' ]
    ```
    
    - `Array.slice([start], [end])`
    - slice()는 splice()와 다르게 원본 배열에 영향을 끼치지 않는다.
    
    ```jsx
    let arr = ['one', 'two', 'three'];
    let arr2 = arr.slice(1);
    console.log(arr) // [ 'one', 'two', 'three' ]
    console.log(arr2) // [ 'two', 'three' ]
    ```
    
- 배열 병합
    - `Array.concat(arg1, arg2)`
    
    ```jsx
    let arr = ['one', 'two', 'three'];
    let arr2 = [1, 2, 3];
    let arr3 = arr.concat(arr2);
    
    console.log(arr); // [ 'one', 'two', 'three' ]
    console.log(arr2); // [ 1, 2, 3 ]
    console.log(arr3); //  [ 'one', 'two', 'three', 1, 2, 3 ]
    ```
    

## 배열 탐색

- index 탐색 (앞에서 부터): `Array.indexOf(iten, from)`
- index 탐색 (뒤에서 부터): `Array.lastIndexOf(item, from)`
- 값 포함 여부 확인: `Array.includes(item, from)`
    
    ```jsx
    let arr = ['one', 'two', 'three', 'one'];
    
    console.log(arr.indexOf('one')); // 0
    console.log(arr.lastIndexOf('one')); // 3
    console.log(arr.includes('four')); // false
    ```
    

## 배열 변형

- 배열 정렬
    - 내림차순: `Array.sort()`
    - 오름차순: `Array.reverse()`
    
    ```jsx
    let arr = [1, 5, 4, 2, 3];
    console.log(arr.sort()); // [ 1, 2, 3, 4, 5 ]
    console.log(arr.reverse()); // [ 5, 4, 3, 2, 1 ]
    
    // 유니코드 기반으로 정렬하기때문에 숫자 정렬할때 조심해야한다
    let arr = [11, 111, 22, 33, 2222];
    console.log(arr.sort()); // [ 11, 111, 22, 2222, 33 ]
    console.log(arr.sort((a, b) => a - b)); // [ 11, 22, 33, 111, 2222 ]
    ```
    
- 배열 변환
    - 배열 값을 문자열로 변환: `Array.join(seperator)`
    
    ```jsx
    let arr = [1, 5, 4, 2, 3];
    console.log(arr.join(':')); // 1:5:4:2:3
    ```
    

## 배열 반복문

```jsx
let arr = ['one', 'two', 'three'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (const val of arr) {
    console.log(val);
}
for (const index in arr) {
    console.log(arr[index]);
}
```