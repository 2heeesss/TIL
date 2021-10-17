# 프로그래머스_없는 숫자 더하기
## 로직
### 풀이 1
- 주어진 배열을 순회
- 배열을 join()하여 문자열로 치환
- 문자열을 i를 기준으로 나누기.
### 풀이 2
- 주어진 배열을 순회
- 0~9까지 다 더한 값인 45에서 하나씩 빼기
## 풀이 설명
### 1번풀이
- 예전에 split().join()으로 풀었던 문제가 생각나서 떠올린 접근
- join().split(i)를 했을때 나눠 진다면 i값이 있다는 의미 이므로 result에 i를 추가하는 방법을 사용
### 2번풀이
- 45에서 하나씩 빼면 더 편할듯해서 사용

```js
// 풀이 1
function solution(numbers) {
    let result = 0;
    let subList = [];

    for (let i = 0; i < 10; i++) {
        subList = numbers.join().split(i);
        if (subList.length == 1) result += i;
    }

    return result;
}

// 풀이 2
function solution(numbers) {
    let result = 45;
    for (const num of numbers) {
        result -= num;
    }
    return result;
} 
```