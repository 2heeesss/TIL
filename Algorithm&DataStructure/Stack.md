# Stack

- 나중에 넣은 데이터가 먼저나오는 LIFO 기반의 선형 자료구조
- 구현 메서드
    - 데이터 전체 획득: `Stack.getBuffer()`
    - 비어 있는지 확인: `Stack.isEmpty()`
    - 데이터 추가: `Stack.push()`
    - 데이터 삭제: `Stack.pop()`
    - 마지막 데이터 조회: `Stack.peak()`
    - 크기 확인: `Stack.size()`
    - 데이터 위치: `Stack.indexOf()`
    - 존재 여부 확인: `Stack.includes()`

![Stack](https://user-images.githubusercontent.com/65802921/136967712-3dafb3e7-67a2-4256-9c7b-4b44476d3d49.jpg)


```jsx
function Stack(array) {
    this.array = array ? array : [];
}

Stack.prototype.getBuffer = function () {
    return this.array.slice();
}

Stack.prototype.isEmpty = function () {
    return this.array.length === 0;
}

Stack.prototype.push = function (element) {
    return this.array.push(element);
}

Stack.prototype.pop = function () {
    return this.array.pop();
}

Stack.prototype.peak = function () {
    return this.array[this.array.length - 1];
}

Stack.prototype.size = function () {
    return this.array.length;
}

Stack.prototype.indexOf = function (element, position = 0) {
    for (let i = position; i < this.array.length; i++) {
        if (element === this.array[i]) return i;
    }
}

Stack.prototype.includes = function (element) {
    for (let i = 0; i < this.array.length; i++) {
        if (element === this.array[i]) return true;
    }
    return false;
}
```