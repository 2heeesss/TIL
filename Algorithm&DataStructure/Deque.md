# 데크 (Deque)

- Double-Ended Queue 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료구조
- 구현 메서드
    - 데이터 전체 획득: `Deque.getBuffer()`
    - 비어 있는지 확인: `Deque.isEmpty()`
    - 데이터 추가: `Deque.pushFront()`, `Deque.pushBack()`
    - 데이터 삭제: `Deque.popFront()`, `Deque.popBack()`
    - 첫번째 & 끝 데이터 반환: `Deque.front()`, `Deque.back()`
    - 사이즈: `Deque.size()`
    - 전체 삭제: `Deque.clear()`

![Deque](https://user-images.githubusercontent.com/65802921/136696534-46c6f74e-de43-4d9d-bebc-0bca7da435e0.jpg)


```jsx
function Deque(array = []) {
    this.array = array;
}
Deque.prototype.getBuffer = function () {
    return this.array.slice();
}

Deque.prototype.isEmpty = function () {
    return this.array.length == 0;
}

Deque.prototype.pushFront = function (element) {
    return this.array.unshift(element);
}

Deque.prototype.popFront = function () {
    return this.array.shift();
}

Deque.prototype.pushBack = function (element) {
    return this.array.push(element)
};

Deque.prototype.popBack = function () {
    return this.array.pop();
}

Deque.prototype.front = function () {
    return this.array.length == 0 ? undefined : this.array[0];
}

Deque.prototype.back = function () {
    return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
}

Deque.prototype.size = function () {
    return this.array.length;
}

Deque.prototype.clear = function () {
    this.array = [];
}
```