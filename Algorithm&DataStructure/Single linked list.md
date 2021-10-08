# 연결 리스트

- 각 노드가 데이터와 포인터를 가지며, 한 줄로 연결되어 있는 방식으로 데이터를 저장하는 자료구조
- 구현 메서드
    - 노드개수 / 비어 있는지 확인 /  노드 출력: `LinkedList.size()`, `LinkedList.isEmpty()`, `LinkedList.printNode()`
    - 노드 추가: `LinkedList.append()`, `LinkedList.insert()`
    - 노드 삭제: `LinkedList.remove()`, `LinkedList.removeAt()`
    - 데이터 위치 확인: `LinkedList.indexOf()`

![연결리스트](https://user-images.githubusercontent.com/65802921/136557154-3b16a392-84db-42c5-a09f-d5f21b9afb85.jpg)

- data: 요소의 값
- next: 다른 노드를 가리키는 포인터

연결리스트 장점
- 자료의 추가 삭제가 용이하다

연결리스트 단점
- 자료의 끝부분 추가 삭제 시 액세스 하는데 시간이 오래걸린다.

```js
function Node(data) {
    this.data = data;
    this.next = null;
}
function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.size = function () {
    return this.length;
}

LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
}

LinkedList.prototype.printNode = function () {
    for (let node = this.head; node != null; node = node.next) {
        process.stdout.write(`${node.data} -> `);
    }
    console.log('null');
}

LinkedList.prototype.append = function (value) {
    let node = new Node(value);
    let current = this.head;
    if (this.head === null) {
        this.head = node;
    } else {
        while (current.next != null) {
            current = current.next;
        }
        current.next = node;
    }
    this.length++;
}

LinkedList.prototype.insert = function (value, position = 0) {
    if (position < 0 || position > this.length) {
        return false;
    }
    let node = new Node(value);
    let current = this.head;
    let index = 0;
    let prev;

    if (position === 0) {
        node.next = current;
        this.head = node;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        node.next = current;
        prev.next = node;
    }
    this.length++;
    return true;
}

LinkedList.prototype.remove = function (value) {
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
    } else {
        prev.next = current.next
        current.next = null;
    }
    this.length--;
    return current.data;
}

LinkedList.prototype.removeAt = function (position = 0) {
    if (position < 0 || position >= this.length) {
        return null;
    }
    let current = this.head;
    let prev;
    let index = 0;

    if (position == 0) {
        this.head = current.next;
    } else {
        while (index++ < position) {
            prev = current;
            current = current.next;
        }
        prev.next = current.next;
    }
    this.length--;
    return current.data;
}
// value값을 갖는 node위치 반환
LinkedList.prototype.indexOf = function (value) {
    let current = this.head;
    let index = 0;
    while (current != null) {
        if (current.data === value) {
            return index;
        }
        index++;
        current = current.next;
    }
    return -1;
}

LinkedList.prototype.remove2 = function (value) {
    let index = this.indexOf(value);
    return this.removeAt(index);
}
```