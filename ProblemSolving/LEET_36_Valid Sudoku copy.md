# Leetcode - 48. Rotate Image

#배열#수학

## 풀이 복기

풀이 순서는 회전 배열 만들기 -> 기존 배열에 할당 순으로 작성했다. 회전 배열을 만들 때 reverse 메서드를 사용했는데, 사용하지 않고도 원하는 값을 만들 수 있다. 하지만 for문으로 순회할 때 인덱스 0 부터가 아닌 lenght - 1 로 시작하여 감소하는 for문을 작성해야 한다. 이는 읽는 사람에게 혼동을 줄 수 있고, 코드를 작성 할 시점에도 디버깅 하기 불편하다는 문제가 있다.

### 풀이 1

```js
// Runtime: 69 ms, faster than 69.90%
const rotate = function (matrix) {
  const rotatedMatrix = [...matrix].reverse().map((_, i, arr) => {
    const tempArr = [];
    for (let j = 0; j < arr[0].length; j++) {
      tempArr.push(arr[j][i]);
    }
    return tempArr;
  });

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = rotatedMatrix[i][j];
    }
  }
};
```
