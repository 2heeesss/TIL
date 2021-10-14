# Queue

- 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료구조
- 구현 메서드
    - 데이터 전체 획득: `Queue.getBuffer()`
    - 비어 있는지 확인: `Queue.isEmpty()`
    - 데이터 추가: `Queue.enqueue()`
    - 데이터 삭제: `Queue.dequeue()`
    - 첫번째 데이터: `Queue.front()`
    - 사이즈: `Queue.size()`
    - 전체 삭제: `Queue.clear()`

![Queue](https://user-images.githubusercontent.com/65802921/137332855-2ad7c954-1164-4975-a838-4f955d89c48b.jpg)


```jsx
// function Queue(array) {
//     this.array = array ? array : [];
// }
function Queue(array) {
    this.array = array ? array : [];
    this.head = 0;
    this.tail = array ? array.length : 0;
}

Queue.prototype.getBuffer = function () {
    return this.array.slice();
}

Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
}

// 데이터 추가
// Queue.prototype.enqueue = function (element) {
//     return this.array.push(element);
// }
Queue.prototype.enqueue = function (element) {
    return (this.array[this.tail++] = element);
}

// Queue.prototype.dequeue = function () {
//     return this.array.shift()
// }
Queue.prototype.dequeue = function () {
    if (this.head === this.tail) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head++];
    return element;
}

Queue.prototype.front = function () {
    return this.array.length === 0 ? undefined : this.array[0];
}

Queue.prototype.size = function () {
    return this.array.length;
}

Queue.prototype.clear = function () {
    this.array = [];
    this.head = 0;
    this.tail = 0;
}
```