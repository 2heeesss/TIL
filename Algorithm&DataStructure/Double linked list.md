# 이중 연결 리스트

- 각 노드가 데이터와 포인터를 가지며, 두 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
- 구현 메서드
    - 노드개수 / 비어있는지 확인: `DoubleLinkedList.size()`, `DoubleLinkedList.isEmpty()`
    - 순차 출력 / 역 출력: `DoubleLinkedList.printNode()`, `DoubleLinkedList.printNodeInverse()`
    - 노드 추가: `DoubleLinkedList.append()`, `DoubleLinkedList.insert()`
    - 노드 삭제: `DoubleLinkedList.remove()`, `DoubleLinkedList.removeAt()`
    - 데이터 위치 확인: `DoubleLinkedList.indexOf()`

![이중 연결 리스트](https://user-images.githubusercontent.com/65802921/136661227-1deac2e3-cbfc-400c-adcf-fdcff6f15c29.jpg)



```js
function Node(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoubleLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

DoubleLinkedList.prototype.size = function () {
    return this.length;
};
DoubleLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
};

DoubleLinkedList.prototype.print = function () {
    process.stdout.write('head -> ');
    for (let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log('null');
};

DoubleLinkedList.prototype.printInverse = function () {
    let temp = [];
    process.stdout.write('null <- ');
    for (let node = this.tail; node != null; node = node.prev) {
        temp.push(node.data);
    }
    for (let i = temp.length - 1; i >= 0; i--) {
        process.stdout.write(`${temp[i]} <- `)
    }
    console.log('tail');
};

DoubleLinkedList.prototype.append = function (value) {
    let node = new Node(value);

    if (this.head === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    this.length++;
};

DoubleLinkedList.prototype.insert = function (value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }

    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = current;
            current.prev = node;
            this.head = node;
        }
    } else if (position === this.length) {
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            current = this.tail;
            node.prev = current;
            current.next = node;
            this.tail = node;
        }
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        node.prev = prev;
        node.next = current;

        prev.next = node;
        current.prev = node;
    }
    this.length++;
    return true;
};

DoubleLinkedList.prototype.remove = function (value) {
    let current = this.head;
    let prev;

    while (current.data != value && current.next != null) {
        prev = current;
        current = current.next;
    }
    if (current.data != value) {
        return null;
    }

    if (current === this.head) {
        this.head = current.next;
        if (this.length === 1) this.head = null;
        else this.head.prev = null;
    } else if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        prev.next = current.next;
        current.next.prev = prev;
    }
    this.length--;
    return current.data;
};

DoubleLinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) {
        return null;
    }
    let current = this.head;
    let prev;
    let index = 0;

    if (position === 0) {
        this.head = current.next;
        if (this.length === 1) this.tail = null;
        else this.head.prev = null;
    } else if (position === this.length - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
        current.next.prev = prev;
    }

    this.length--;
    return current.data;
};

DoubleLinkedList.prototype.indexOf = function (value) {
    let current = this.head;
    let index = 0;

    while (current != null) {
        if (current.data === value) {
            return index;
        }

        current = current.next;
        index++;
    }
    return -1;
}

DoubleLinkedList.prototype.remove2 = function (value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
}
```