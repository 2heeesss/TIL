# [프로그래머스] 괄호변환

## 풀이 복기

-   문제 자체를 해석하는데 시간이 많이 소모됐다. (문자열 u를 구하는 방법을 잘못생각함)
-   한번 읽은 지문은 다시 읽지않도록 주석으로 꼼꼼하게 적어야 할것같다.
-   정규식을 사용해 `문자열 -> 배열 -> map -> 문자열` 이 순서를 줄일 수 있다.
-   `.replace(/\(|\)/g, (s) => (s === "(" ? ")" : "("));`

```js
function solution(p) {
    if (isEmpty(p)) return "";
    if (isCorrect(p)) return p;

    const [u, v] = divideUV(p);

    if (isCorrect(u)) return u + solution(v);

    const res = `(${solution(v)})`;
    const arr = u
        .split("")
        .slice(1, u.length - 1)
        .map((val) => (val === "(" ? ")" : "("))
        .join("");
    return res + arr;

    function isEmpty(str) {
        return str.length === 0 ? true : false;
    }

    function isCorrect(str) {
        const stk = [str[0]];

        for (let i = 1; i < str.length; i++) {
            if (stk[stk.length - 1] === "(" && str[i] === ")") {
                stk.pop();
            } else {
                stk.push(str[i]);
            }
        }
        return stk.length === 0 ? true : false;
    }

    function divideUV(str) {
        let left = 0;
        let right = 0;

        for (const braket of str) {
            if (braket === "(") left += 1;
            if (braket === ")") right += 1;
            if (left === right) return [str.slice(0, left + right), str.slice(left + right)];
        }
    }
}
```
