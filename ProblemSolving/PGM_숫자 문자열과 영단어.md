# [프로그래머스] 숫자 문자열과 영단어
#구현#배열

## 풀이
- 첫번째 풀이
    - s를 순회하며 정규표현식으로 `replace()`
- 두번째 풀이
    - `split()`을 함과 동시에 인덱스로 `join()`해서 새로운 문자열 생성

### 첫번째 풀이
```js
function solution(s) {
    const alphabets = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g, /nine/g];

    for (let i = 0; i < 10; i++) {
        s = s.replace(alphabets[i], i);
    }

    return parseInt(s);
}
```

### 두번째 풀이
```js
function solution(s) {
    const num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    for (let i = 0; i < 10; i++) {
        s = s.split(num[i]).join(i);
    }
    return parseInt(s)
} 
```
