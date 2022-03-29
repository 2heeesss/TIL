# Leetcode - 41. First missing positive

#배열#해쉬

## 풀이

첫번째 풀이는 정렬, 투포인터 알고리즘을 사용해서 풀었다. 해당 문제에서 투포인터를 사용하려면 정렬된 배열이어야 하기때문에 sort를 사용한 이후에 투포인터를 사용했다. slow, fast 두개의 포인터가 각각 인덱스 0, 1부터 시작하면서 크기를 비교했다.

두번째 풀이는 빈 배열을 만들어 값이 존재할경우 true, 아닐경우 false로 저장하여 마지막에 false인 인덱스를 찾는식으로 풀었다.

세번째 풀이는 두번째풀이의 로직을 메서드로 분리하여 작성하였다.

## 복기

첫번째 풀이가 통과는 되었지만 조건 중 하나인 O(n) 시간복잡도를 가져야 한다는 점을 통과하지 못했다. 투포인터는 O(n) 이지만, sort 함수는 O(nlogn)이기때문에 조건을 만족하지 못했다. 첫번째 풀이도 한번에 통과하지 못했는데, 예외처리를 제대로 하지 못했기 때문이다. 어떤 경우가 있는지 머리로 먼저 생각하고 손이 늦게 나가는 습관이 필요하다.

두번째 풀이는 빈 배열을 만들고 값이 있는지 계속 확인해나가는 방법인데 이는 filter에서 한번, forEach에서 한번 순회하기때문에 O(n) 시간복잡도를 가지므로 조건을 통과한다. 실제로 90ms 가량 빨라진것을 확인할 수 있다.

세번째 풀이는 클래스로 나누어 풀어봤는데, 이 방법이 좋은지 판단은 서지 않는다. 하지만 다양한 방법으로 풀고자 했기때문에 클래스로도 작성해봤다. 클래스로 로직을 작성했을 경우는 코드의 양은 늘어나지만, 메인 로직에서 메서드체이닝을 사용해 간결하게 표현할 수 있다는 장점이 있는것 같다.

### 풀이 1

```js
// 271ms
const firstMissingPositive = function (nums) {
  const positiveNums = [...new Set(nums)].filter(num => num > 0).sort((a, b) => a - b);

  let slow = 0;
  let fast = 1;
  if (positiveNums[slow] > 1) return 1;
  if (positiveNums.length < 1) return 1;
  if (positiveNums.length === 1 && positiveNums[slow] > 1) return 1;
  if (positiveNums.length === 1 && positiveNums[slow] === 1) return 2;

  positiveNums.push(Infinity);

  while (fast < positiveNums.length) {
    if (positiveNums[fast] - positiveNums[slow] === 1) {
      fast++;
      slow++;
    } else {
      return positiveNums[slow] + 1;
    }
  }
};
```

### 풀이 2

```js
// 180ms
const firstMissingPositive = function (nums) {
  const positiveNums = [...new Set(nums)].filter(num => num > 0);
  const existNums = new Array(positiveNums.length + 1).fill(false);

  existNums[0] = true;

  positiveNums.forEach(num => {
    if (existNums[num] <= positiveNums.length) existNums[num] = true;
  });

  return existNums.indexOf(false) === -1 ? existNums.length : existNums.indexOf(false);
};
```

### 풀이 3

```js
// 176ms
class MyArray {
  constructor(nums) {
    this.nums = nums;
    this.existNums = [];
    this.positiveNums = [];
  }

  getPositiveNums() {
    this.positiveNums = [...new Set(this.nums)].filter(num => num > 0);
    return this;
  }
  getExistNums() {
    this.existNums = new Array(this.positiveNums.length + 1).fill(false);
    this.existNums[0] = true;

    this.nums.forEach(num => {
      if (this.existNums[num] <= this.nums.length) this.existNums[num] = true;
    });
    return this;
  }
  getFirstMissingPositive() {
    return this.existNums.indexOf(false) === -1 ? this.existNums.length : this.existNums.indexOf(false);
  }
}

const firstMissingPositive = function (nums) {
  const numbers = new MyArray(nums);

  numbers.getPositiveNums().getExistNums();

  return numbers.getFirstMissingPositive();
};
```
