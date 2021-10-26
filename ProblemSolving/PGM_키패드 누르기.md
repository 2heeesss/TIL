# [프로그래머스] 키패드 누르기
## 풀이
- 숫자: 1,4,7 일때는 왼손
- 숫자: 3,6,9 일때는 오른손
- 숫자: 2,5,8,0 일때는 손가락 거리 구해서 더 짧은 손가락 저장
## 풀이 복기
- 거리 구하는 공식을 피타고라스로 구했었지만, 문제에 주어진 공식으로 바꿔서 풀어야 했다.
- `includes()`대신 3으로 나눈 나머지로 왼손, 오른손을 확인 하는 방법이 더 좋은 방법.
```js
function solution(numbers, hand) {
    const touchByLeft = [1, 4, 7];
    const touchByRight = [3, 6, 9];
    // 숫자패드 좌표
    const numPad = [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2], [3, 0], [3, 1], [3, 2]];
    // 현재 손가락 위치
    const currentLeft = ['*'];
    const currentRight = ['#'];
    let l, r, want, dl, dr;
    let ans = '';

    for (const num of numbers) {
        if (touchByLeft.includes(num)) {
            currentLeft.push(num);
            ans += 'L';
        } else if (touchByRight.includes(num)) {
            currentRight.push(num);
            ans += 'R';
        } else { // 가운데 숫자(2,5,8,0)일때
            // 왼손, 오른손 위치 구한다음, 원하는 숫자와의 거리 구하기
            l = numPad[findIndex(currentLeft[currentLeft.length - 1])];
            r = numPad[findIndex(currentRight[currentRight.length - 1])];
            want = numPad[findIndex(num)];
            dl = findDistance(l, want);
            dr = findDistance(r, want);

            if (dl < dr) {
                currentLeft.push(num);
                ans += 'L';
            } else if (dl > dr) {
                currentRight.push(num);
                ans += 'R';
            } else {
                if (hand === 'right') {
                    currentRight.push(num);
                    ans += 'R';
                } else {
                    currentLeft.push(num);
                    ans += 'L';
                }
            }
        }
    }
    return ans;

    function findIndex(num) {
        if (num === '*') {
            return 9;
        } else if (num === 0) {
            return 10;
        } else if (num === '#') {
            return 11;
        } else {
            return num - 1;
        }
    }
    function findDistance(start, end) {
        return Math.abs(start[0] - end[0]) + Math.abs(start[1] - end[1]);
    }
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
```