# 딕셔너리 (Dictionary)

- key-value 형태로 다양한 자료형 개채(Entity)를 저장하는 자료구조(≈ Map)
- 구현 메서드
    - 전체 개채 획득: `Dictionary.getBuffer()`
    - 초기화: `Dictionary.clear()`
    - 크기 반환: `Dictionary.size()`
    - 개체 추가: `Dictionary.set()`
    - 개체 삭제: `Dictionary.remove()`
    - 개체 반환: `Dictionary.get()`
    - 개체 여부: `Dictionary.has()`
    - key, value 배열 반환: `Dictionary.keys()`, `Dictionary.values()`
    - 고차함수: `Dictionary.each()`

![스크린샷 2021-10-17 오후 3 36 45](https://user-images.githubusercontent.com/65802921/137911471-a647b1c9-69a3-4eed-86d8-22e2f2034ab0.jpg)


```jsx
function Dictionary(items = {}) {
    this.items = items;
}

Dictionary.prototype.getBuffer = function () {
    return { ...this.items };
};

Dictionary.prototype.clear = function () {
    this.items = {};
};

Dictionary.prototype.size = function () {
    return Object.keys(this.items).length;
};

Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
    // return 
};

Dictionary.prototype.set = function (key, val) {
    this.items[key] = val;
};

Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.remove = function (key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    }
    return false;
};

Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
};

Dictionary.prototype.values = function () {
    return Object.values(this.items);
};

Dictionary.prototype.each = function (fn) {
    for (let k in this.items) {
        fn(k, this.items[k]);
    }
}
```