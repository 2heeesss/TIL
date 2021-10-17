# 크레인 인형뽑기
## 로직
- 배열의 행, 열을 바꾸기
- 하나씩 스택에 쌓기
- 스택에 같은거 2개있으면 빼기
- 위 로직으로 접근
## 풀이 설명
- 1번 풀이
    - 2중 for문으로 행과 열을 바꿨습니다.
    - 여기서 차례대로 담기기 때문에 먼저빼야할 인형이 배열의 앞쪽에 담기게 되어 shift()를 사용해 효율적이지 못했습니다.

- 2번 풀이
    - 위 문제를 해결하려 했습니다.
    - reverse(), flat()으로 n*n배열을 요소의 개수가 n^2인 배열 하나로 만들었습니다.
    - 위 배열을 순회하며, 인덱스를 배열의 길이(n) 으로 나눈 나머지를 인덱스로하는 새 배열에 담았습니다.
    - 스택에 쌓고 빼는 로직을 두가지 풀이 동일하게 재귀로 해결했습니다.


```js
function solution(board, moves) {
    let result = 0;
    const newBoard = new Array();
    const stk = new Array();
    let subBoard = new Array();

    // 세로로 배열 바꾸기
    for (let i = 0, len = board.length; i < len; i++) {
        subBoard = [];
        for (let j = 0, len = board.length; j < len; j++) {
            if (board[j][i] !== 0) subBoard.push(board[j][i]);
        }
        newBoard.push(subBoard);
    }
    console.log(newBoard);
    // moves를 순회하며 stk에 쌓음
    for (const target of moves) {
        if (newBoard[target - 1].length == 0) continue;
        stk.push(newBoard[target - 1].shift());
        //쌓인 stk에서 최근 2개가 같으면 pop() 2번, result +2번
        check(stk.length);
    }

    function check(length) {
        if (length < 2) return;
        if (stk[length - 1] == stk[length - 2]) {
            stk.pop();
            stk.pop();
            result += 2;
            check(length - 2);
        }
    }
    return result;
}

// 풀이 리팩토링
function solution(board, moves) {
    let result = 0;
    const LEN = board.length;
    const stk = new Array();
    const arr = Array.from({ length: LEN }, () => []);
    let flatBoard = board
        .reverse()
        .flat()
        .forEach((val, i) => {
            if (val != 0) arr[i % LEN].push(val)
        });
```
