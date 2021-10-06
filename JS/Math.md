# Math

- 표준 Built-in 객체로써 수학적인 연산을 위한 속성값과 메서드를 제공하는 객체
- Math는 생성자 함수가 아니며, 모든 속성과 메서드는 정적이기에 Math.function()으로 언제든 호출 가능
- 대표 속성 및 메서드
    - 오일러 상수: Math.E
    - PI: Math.PI
    - 절대값: Math.abs(x)
    - 최대값: Math.max(x)
    - 최소값: Math.min(x)
    - 랜덤 난수 값: Math.random()
    - 제곱과 제곱근: Math.pow(x, y), Math.sqrt(x)
    - 소수점 처리: Math.round(x), Math.ceil(x), Math.floor(x)

## 최대/최소/절대값

- 배열을 인수로 받아 최대/최소를 산출하고 싶다면 apply 함수 혹은 스프레드 문법 사용 필요
    
    ```jsx
    console.log(Math.max(1, 2, 3));
    console.log(Math.min(1, 2, 3));
    console.log(Math.abs(-100));
    
    let arr = [1, 2, 3, 4];
    console.log(Math.max(arr)); // NaN
    console.log(Math.max.apply(null, arr)) // 4
    console.log(Math.max(...arr)); // 4
    ```
    

## 속성 및 랜덤

```jsx
console.log(Math.E) // 2.718281828459045
console.log(Math.PI); // 3.141592653589793

console.log(Math.random()); // 0.5180357716947728

console.log(parseInt(Math.random() * 10)); // 2
```

## 제곱/제곱근/소수점 처리

- 제곱: `Math.pow(x,y)`, 제곱근: `Math.sqrt(x)`
- 소수점 이하 반올림 정수: `Math.round(x)`
- 소수점 이하 올림: `Math.ceil(x)`, 소수점 이하 내림: `Math.floor(x)`
    
    ```jsx
    console.log(Math.round(Math.PI)); // 3
    console.log(Math.ceil(Math.PI)); // 4
    console.log(Math.floor(Math.PI)); // 3
    
    // 소수점 n번째 자리까지 반올림
    console.log(Math.PI.toFixed(2)) // 3.14
    ```