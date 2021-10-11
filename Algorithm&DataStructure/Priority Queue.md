
# 우선순위 큐

- 우선순위를 고려하여 먼저 넣은 데이터가 먼저 나오는 FIFO 기반의 선형 자료 구조
- 우선순위 정렬 방식: 배열기반, 연결리스트 기반, 힙 기반 등의 정렬 방식 존재
- 구현 메서드
    - 데이터 전체 획득 / 비어있는지 확인: `PriorityQueue.getBuffer()`, `PriorityQueue.isEmpty()`
    - 데이터 추가 / 삭제: `PriorityQueue.enqueue()`, `PriorityQueue.dequeue()`
    - 첫번째 데이터 / 사이즈 / 전체 삭제: `PriorityQueue.enqueue()`, `PriorityQueue.dequeue()`
    - 첫번째 데이터 / 사이즈 / 전체 삭제: `PriorityQueue.front()`, `PriorityQueue.size()`, `PriorityQueue.clear()`

![Priority Queue](https://user-images.githubusercontent.com/65802921/136788878-fd51ff2e-5c0d-4d77-9401-c88dcb99c264.jpg)
```jsx
function Element(data, priority) {
    this.data = data;
    this.priority = priority;
}

function PriorityQueue() {
    this.array = [];
}

PriorityQueue.prototype.getBuffer = function () {
    return this.array.map(element => element.data);
};

PriorityQueue.prototype.isEmpty = function () {
    return this.array.length === 0;
};

PriorityQueue.prototype.enqueue = function (data, priority) {
    let element = new Element(data, priority);
    let added = false;

    for (let i = 0; i < this.array.length; i++) {
        if (element.priority < this.array[i].priority) {
            this.array.splice(i, 0, element);
            added = true;
            break;
        }
    }

    if (!added) {
        this.array.push(element);
    }

    return this.array.length;
};

PriorityQueue.prototype.dequeue = function () {
    return this.array.shift();
};

PriorityQueue.prototype.front = function () {
    return this.array.length == 0 ? undefined : this.array[0].data;
};

PriorityQueue.prototype.size = function () {
    return this.array.length;
};

PriorityQueue.prototype.clear = function () {
    this.array = [];
};
```