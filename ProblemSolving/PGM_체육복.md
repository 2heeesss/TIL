# 프로그래머스_체육복
## 풀이
1. 1부터n까지 1의 값 부여
2. 옷이 없으면 값 감소
3. 여벌 옷이 있다면 값 증가
4. 순회하며 값이0이라면 앞, 뒤 확인하여 여분이 있으면 감소하고 현재 값 증가
## 풀이 복기
- 배열, map 어느방법을 사용해서 풀어도 잘 동작한다.
- 하지만, 학생-옷 이라는 key-value 형태의 값이 주어지므로 map을 사용하는게 더 좋겠다고 판단했다.
- 문제를 해결하기 알맞은 자료구조가 있으며 해당 문제에 더 적합한 자료구조를 사용하는것이 좋을듯하다.

### 풀이 1
```js
function solution(n, lost, reserve) {
    let res = 0;
    const students = new Map();
    for (let i = 1; i <= n; i++) {
        students.set(i, 1);
    }
    for (const man of lost) {
        students.set(man, students.get(man) - 1);
    }
    for (const man of reserve) {
        students.set(man, students.get(man) + 1);
    }
    students.forEach((val, key) => {
        if (val <= 0) {
            if (students.get(key - 1) > 1) {
                students.set(key, 1);
                students.set(key - 1, students.get(key - 1) - 1);
            } else if (students.get(key + 1) > 1) {
                students.set(key, 1);
                students.set(key + 1, students.get(key + 1) - 1);
            }
        }
    });
    students.forEach(val => {
        if (val > 0) res++;
    });

    return res;
}
```
### 풀이 2
```js
function solution(n, lost, reserve) {
    const students = new Array(n + 2).fill(1)
    lost.forEach(val => students[val]--);
    reserve.forEach(val => students[val]++);
    students.forEach((val, i) => {
        if (val < 1) {
            if (students[i - 1] > 1) {
                students[i - 1]--;
                students[i]++;
            } else if (students[i + 1] > 1) {
                students[i + 1]--;
                students[i]++;
            }
        }
    });

    return students.reduce((acc, cur) => cur > 0 ? acc + 1 : acc) - 2;
}
```