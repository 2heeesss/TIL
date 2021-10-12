
# 원형 큐

- 원형 형태를 가지며, 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조
- 구현 메서드
    - 데이터 꽉 찼는지: `CircularQueue.isEmpty()`
    - 비어 있는지 확인: `CircularQueue.isFull()`
    - 데이터 추가: `CircularQueue.enqueue()`
    - 데이터 삭제: `CircularQueue.dequeue()`
    - 데이터 반환: `CircularQueue.getBuffer()`
    - 첫번째 데이터: `CircularQueue.front()`
    - 사이즈: `CircularQueue.size()`
    - 전체 삭제: `CircularQueue.clear()`
        
        
![Circular Queue](https://user-images.githubusercontent.com/65802921/136967712-3dafb3e7-67a2-4256-9c7b-4b44476d3d49.jpg)


```jsx
const DEFAULT_SIZE = 5;

function CircularQueue(array = [], size = DEFAULT_SIZE) {
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
}

CircularQueue.prototype.getBuffer = function () {
    return this.array.slice();
}

CircularQueue.prototype.isEmpty = function () {
    return this.length == 0;
}

CircularQueue.prototype.isFull = function () {
    return this.size == this.length;
}

CircularQueue.prototype.enqueue = function (element) {
    if (this.isFull()) return false;

    this.array[this.tail] = element;
    this.tail = (this.tail + 1) % this.size;
    this.length++;

    return true;
};

CircularQueue.prototype.dequeue = function () {
    if (this.isEmpty()) return undefined;

    let element = this.array[this.head];
    delete this.array[this.head];
    this.head = (this.head + 1) % this.size;
    this.length--;

    return element;
}

CircularQueue.prototype.front = function () {
    return this.length == 0 ? undefined : this.array[this.head];
}

CircularQueue.prototype.dataSize = function () {
    return this.length;
}

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
}
```