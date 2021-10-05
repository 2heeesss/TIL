# Set

- value만 저장하며 중복을 허용하지 않는 Collection
- 대표 속성 및 메서드
    - 생성자: `new Set()`
    - 개수 확인: `Set.size`
    - 요소 추가: `Set.add(value)`
    - 요소 삭제: `Set.delete(value)`
    - 전체 삭제: `Set.clear()`
    - 요소 존재 여부 확인: `Set.has(key)`
    - 그 밖의 메서드: `Set.keys()`, `Set.values()`, `Set.entries()`

## 요소 추가/삭제

- 다양한 자료형을 value로 사용 가능하며, set.add 호출 시 set이 반환되므로 체이닝 가능
    
    ```jsx
    let set = new Set();
    
    set.add(0).add(0).add(1).add(2);
    console.log(set); //Set { 0, 1, 2 }
    console.log(set.has(0), set.has(4)); // true false
    ```
    

## Set 반복문

- Collection 객체인 Set이 가지고 있는 iterator 속성을 이용하여 for ... of 구문을 통해 반복문 수행 가능
    
    ```jsx
    let set = new Set();
    set.add(0).add(0).add(1).add(2);
    
    for (let val of set) {
        console.log(val);
    }
    // 0
    // 1
    // 2
    
    for (let key of set.keys()) {
        console.log(key)
    }
    // 0
    // 1
    // 2
    
    for (let values of set.values()) {
        console.log(values)
    }
    // 0
    // 1
    // 2
    ```