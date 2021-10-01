# String

## String정의 방법

- 작은 따옴표, 큰 따옴표, 백틱, String()

```jsx
let a = 'a'; // a
let b = "b"; // b
let c = `c`; // c
let d = String('d'); // d
```

## String 메서드

### 문자열 길이

- `String.length`

```jsx
let str = 'hello world!';
console.log(str.length); // 12
```

### 문자열 접근

- `String.charAt(index)`, `String.charCodeAt(index)`, `String[index]`
- String.charCodeAt() 메서드는 아스키 코드 값을 반환한다.

```jsx
let str = 'hello world!';
console.log(str.charAt(0)); // h
console.log(str.charCodeAt(0)); // 104
console.log(str[0]); // h
```

### 문자열 검색

- 문자열 검색(index): `String.indexOf(substr, pos)`, `String.lastIndexOf(substr, pos)`
- substr: 찾고싶은 문자, pos: 어디서 부터 검색할지

```jsx
let str = 'hello world!';
console.log(str.indexOf('o')); // 4 (첫번째 만난 o의 인덱스 반환)
console.log(str.lastIndexOf('o')); // 7
```

- 문자열 검색(bool): `String.includes(substr, pos)`, `String.startsWith(substr,pos)`, `String.endsWith(substr, pos)`

```jsx
let str = 'hello world';
console.log(str.includes('hi')); // false
console.log(str.startsWith('h')); // true
console.log(str.startsWith('ello', 1); // true
// 특정 위치의 문자열이 맞는지 확인할때 사용하기
console.log(str.startsWith('h', 1)); // false
console.log(str.endsWith('d')); // true
```

### 문자열 대소문자 변환

- `String.toUpperCase()`, `String.toLowerCase()`

```jsx
str = 'hello WORLD!';
console.log(str); // hello WORLD!
console.log(str.toUpperCase()); // HELLO WORLD!
console.log(str.toLowerCase()); // hello world!

```

### 문자열 치환

- 처음 만나는 요소 문자열 치환: `String.replace(origin_str, change_str)`
- 정규 쵸현식 활용 문자열 치환: `String.replace(정규표현식, change_str)`

```jsx
let str = 'heLLo world!';
console.log(str.replace('world', 'hi')); // heLLo hi!
console.log(str.replace('!', '?')); // heLLo world?
// 모든 L을 e로 바꾸기
console.log(str.replace(/L/g, 'e')); // heeeo world!
```

### 문자열 추출

- 위치 기반 문자열 추출: `String.slice(start, end)`, `String.substring(start, end)`

```jsx
let str = 'hello world!';
console.log(str.slice(2)); // llo world!
console.log(str.slice(1, 2)); // e
console.log(str.slice(-3, -1)) // ld

console.log(str.slice(2, 4)); // ll
console.log(str.slice(4, 2)); // ''
console.log(str.substring(2, 4)); // ll
console.log(str.substring(4, 2)); // ll
```

- 길이 기반 문자열 추출: `String.substr(start, length)`

```jsx
let str = 'hello world!';
console.log(str.substr(1, 3)); // ell
```

### 문자열 분할

- 배열로 문자열 분할: `String.split(separator, limit)`

```jsx
let str = 'a b c d e f';
console.log(str) // a b c d e f
console.log(str.split(' ')) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
```