# Array chunking

```jsx
숫자로 이루어진 배열이 주어졌을 때
size에 맞게 array를 나눠보자
- input: [1,2,3,4,5], 2
- output: [[1,2],[3,4],[5]]

```

## 1. for of와 if

```jsx
function chunk(array, size) {
    const list = [];
    let subList = [];
    let cnt = 0;
    for (const x of array) {
        subList.push(x)
        cnt++;
        if (cnt === size) {
            list.push(subList);
            subList = new Array();
            cnt = 0;
        }
    }
    if (array.length % size === 0) {
        return list;
    }
    list.push(subList);
    return list;
}
```

- for of로 배열을 순회하며 subList에 요소를 담는다
- cnt가 증가하여 size와 같아졌을때 subList를 list에 담는다
- array의 크기가 size로 나누어 떨어지면 list를 return하고
- 아닐경우 subList를 한번더 list에 push한 뒤 return

## 2. filter()

```jsx
function chunk(array, size) {
    const list = [];
    let subList = [];

    array.filter((val) => {
        subList.push(val);
        if (subList.length === size) {
            list.push(subList);
            subList = new Array();
        }
    })
    if (array.length % size === 0) {
        return list;
    }
    list.push(subList);
    return list;
}
```

- array의 요소를 filter로 순회하며 sublist에 요소를 담는다
- sublist의 크기가 size와 같아졌을때 subList를 list에 담는다
- array의 크기가 size로 나누어 떨어지면 list를 return하고
- 아닐경우 subList를 한번 더 list에 담고 return

## for of와 if 두번째 버전

```jsx
function chunk(array, size) {
    const chunked = [];

    for (let elem of array) {
        const last = chunked[chunked.length - 1] //chunked의 마지막 원소
        if (!last || last.length === size) chunked.push([elem]);
        else last.push(elem);
    }
    return chunked
}
```

- for of로 array의 요소를 순회한다
- last에는 chunked의 마지막 요소를 저장한다
- last가 undefined이거나(값이 비어있을 때) last의 크기가 size와 같을때는 요소를 배열로 만들어 chunked에 담는다
- 아닐경우 chunked의 마지막요소(배열)에 배열의 요소를 담는다

## slice()

```jsx
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index = index + size;
    }
    return chunked;
}
```

- 변수 index가 array의 길이가 작을때는 계속 반복
- chunked 배열에, array배열의 index부터 index+size만큼 잘라서 담는다
- index에 size만큼 값을 추가한다

## 풀이 복기

배열의 메서드들을 잘 알고있다면 더 쉽게 풀었을것 같다. slice()를 제외한 나머지 메서드 들도 충분히 익히는게 중요!

for of와 if 두번째 버전 풀이방식에서 배열이 어떻게 동작하는지 이해하는게 중요하다. 기본에 충실하자