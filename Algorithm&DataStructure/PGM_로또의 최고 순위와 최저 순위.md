# 프로그래머스 로또의 최고 순위와 최저 순위
#구현

## 첫번째 풀이
```js
function solution(lottos, win_nums) {
    const res = [];
    
    const correctNum = lottos.reduce((acc, cur)=>{
        return win_nums.includes(cur) ? acc+1 : acc;
    },0);
    const zeroCnt = lottos.reduce((acc, cur)=> {
        return cur === 0 ? acc+1: acc;
    },0);
    res.push(correctNum+zeroCnt);
    res.push(correctNum);
    const answer = res.map(value =>  value === 0 ? 6 : 7-value);
    
    return answer;
}
```

## 두번째 풀이
```js
function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
```

## 풀이 방법
첫번째 풀이는 reduce 메서드를 활용해 각각 맞춘 숫자의 개수와, 지워진 0의 개수를 얻는다.

얻은 값을 토대로 다시한번 map 메서드를 활용하여 최종값을 계산한다.

두번째 풀이는 filter 메서드를 활용해 각각의 조건에 맞는 숫자가 남은 배열을 남기고, 그 배열의 길이를 얻어 한번에 확인하였다.

몇등인지 확인하는 방법또한 배열로 쉽게 확인하였다.

## 풀이 복기
정답숫자와 내 로또 숫자가 맞을때를 확인해야해서 reduce를 써야겠다는 생각이 먼저 들었다. 하지만 두번째 풀이를 확인하고 나서 더 깔끔하다고 생각했다.

각 조건에 맞는 배열의 길이를 반환할때는 reduce 보다 filter로 조건을 거르고, 길이를 반환하는 로직을 생각하면 쉽고 편하게 구현할 수 있을것 같다.