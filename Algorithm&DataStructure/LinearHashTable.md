# 선형 조사법 해시테이블 (Linear probing Hash Table)

- Hash 충돌이 발생했을 때, `그 다음 주소를 확인하고 비어 있다면 그 자리에 대신 저장` 하는 해시테이블 기반 자료구조
- 구현 메서드
    - 객체 초기화: `LinearHashTable.clear()`
    - 크기 반환: `LinearHashTable.size()`
    - 전체 데이터 바환: `LinearHashTable.getBuffer()`
    - 전체 데이터 출력: `LinearHashTable.print()`
    - 데이터 추가: `LinearHashTable.put()`
    - 데이터 삭제: `LinearHashTable.remove()`
    - 데이터 반환: `LinearHashTable.get()`

![선형 해시테이블](https://user-images.githubusercontent.com/65802921/139453995-dbefa125-7023-4411-879c-27359b1ffafe.jpg)

```jsx
const HASH_SIZE = 5; // 충돌 빈도를 증가시키기 위해 5로 설정

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function LinearHashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// loselose 해시함수
LinearHashTable.prototype.hashcode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

LinearHashTable.prototype.put = function (key, value) {
    let index = this.hashcode(key);
    let startIndex = index;
    do {
        if (this.table[index] === undefined) {
            this.table[index] = new Element(key, value);
            this.length++;

            return true;
        }

        index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);

    return false;
};

LinearHashTable.prototype.get = function (key) {
    let index = this.hashcode(key);
    let startIndex = index;
    do {
        if (this.table[index] !== undefined && this.table[index].key === key) {
            return this.table[index].value;
        }

        index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);
    return undefined;
};

LinearHashTable.prototype.remove = function (key) {
    let index = this.hashcode(key);
    let startIndex = index;

    do {
        if (this.table[index] !== undefined && this.table[index].key === key) {
            let element = this.table[index];
            delete this.table[index];
            this.length--;

            return element;
        }
        index = (index + 1) % HASH_SIZE;
    } while (index !== startIndex);

    return undefined;
};

LinearHashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

LinearHashTable.prototype.size = function () {
    return this.length;
};

LinearHashTable.prototype.getBuffer = function () {
    let arr = [];
    for (let i = 0; i < HASH_SIZE; i++) {
        if (this.table[i]) {
            arr.push(this.table[i]);
        }
    }
    return arr;
};

LinearHashTable.prototype.print = function () {
    for (let i = 0; i < HASH_SIZE; i++) {
        if (this.table[i]) {
            console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
        }
    }
};
```