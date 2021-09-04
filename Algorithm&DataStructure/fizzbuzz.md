# fizzbuzz

```
정수 n이 주어졌을때 1부터 n까지 
3의 배수면 'fizz', 5의 배수면 'buzz', 3과 5의 배수면 'fizzbuzz', 아무것도 아니라면 숫자를 출력
```

## 1. 기본적인 for loop

```jsx
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) console.log('fizzbuzz');
        else if (i % 3 == 0) console.log('fizz');
        else if (i % 5 == 0) console.log('buzz');
        else console.log(i);
    }
}
```

- 1부터 n까지 순회하며 각각 조건을 확인해주자
- %로 나머지를 구해서 각각 같은지 확인하자

## 2. 위 코드에 추가하기

```jsx
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) console.log('fizzbuzz');
        else if (i % 3 === 0) console.log('fizz');
        else if (i % 5 === 0) console.log('buzz');
        else (console.log(i));
    }
}
```

- 3과 5의 배수는 15의 배수이므로 `i%15` 를 계산하는것이 효율적이다
- `===` 으로 비교하면 값과 데이터타입 모두 확인하므로 더 정확하게 비교할 수 있다.