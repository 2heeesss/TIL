# 해시함수 (Hash Function)

- 임의의 길이의 데이터를 **고정된 길이의 데이터로 매핑**하는 함수
- 해시 함수 특성
    - 압축성: 다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질
    - 효율성: 어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질
    - 저항성: 결과값을 바탕으로 입력 값을 찾는 것이 불가능한 성질

![스크린샷 2021-10-17 오후 4 29 54](https://user-images.githubusercontent.com/65802921/137748124-0e389f3e-7095-47ea-8b43-20213d9defa8.jpg)

# 해시테이블 (Hash Table)

- **Hash 함수를 사용**하여 평균 O(1) 시간 복잡도로 특정 값을 신속하게 찾는 자료구조
- 충돌(Collision) 해결 방법
    - 해시 함수 변경: 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
    - 자료구조 확장: Open Addressing Method(선형 조사법, 이중해시), Close Addressing Method(체이닝)
- 구현 메서드
    - 객체 초기화: `HashTable.clear()`
    - 크기 반환: `HashTable.size()`
    - 전체 데이터 반환: `HashTable.getBuffer()`
    - 전체 데이터 출력: `HashTable.print()`
    - 데이터 추가: `HashTable.put()`
    - 데이터 반환: `HashTable.get()`
    - 데이터 삭제: `HashTable.remove()`

![스크린샷 2021-10-17 오후 4 36 42](https://user-images.githubusercontent.com/65802921/137748114-434c39cd-b3fe-4da9-aae1-82c44480ff25.jpg)

```jsx
const HASH_SIZE = 37;

function Element(key, value) {
    this.key = key;
    this.value = value;
}

function HashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

HashTable.prototype.hashcode = function (key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
};

HashTable.prototype.put = function (key, value) {
    let index = this.hashcode(key);

    if (this.table[index] !== undefined) {
        return false;
    }
    this.table[index] = new Element(key, value);
    this.length++;

    return true;
};

HashTable.prototype.get = function (key) {
    return this.table[this.hashcode(key)];
};

HashTable.prototype.remove = function (key) {
    let index = this.hashcode(key);
    let element = this.table[index];

    if (element !== undefined) {
        delete this.table[index]
        this.length--;
    }
    return element
};

HashTable.prototype.clear = function () {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
};

HashTable.prototype.size = function () {
    return this.length;
};

HashTable.prototype.getBuffer = function () {
    let arr = [];
    for (let i = 0; i < HASH_SIZE; i++) {
        if (this.table[i]) {
            arr.push(this.table[i]);
        }
    }
    return arr;
};

HashTable.prototype.print = function () {
    for (let i = 0; i < HASH_SIZE; i++) {
        if (this.table[i]) {
            console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
        }
    }
};
```