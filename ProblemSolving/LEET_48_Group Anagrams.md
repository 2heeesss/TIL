# Leetcode - 49. Group Anagrams

#정렬#문자열#해쉬

## 풀이 복기

1. strs를 순회하며 해당 요소를 sort
2. sort한것 map에 있는지 확인
   - true: map에 추가하기
   - false: map key, value 새로 만들기
3. map의 value만 리턴하기

정렬된 문자열을 map의 key로, value는 정렬되지 않은 문자열로 Map에 저장했다. has 메서드를 사용하여 Map에 이미 있을경우와 없는경우를 나누어 새로운 key-value를 추가하거나 기존 요소에 추가했다. strs 배열이 하나의 값(Map)으로 계산되어야 하기 때문에 reduce를 사용하였다.

### 풀이 1

```js
// Runtime: 104 ms, aster than 98.61%
const groupAnagrams = function (strs) {
  const strsMap = strs.reduce((map, str) => {
    sortedStr = [...str].sort().join('');

    map.has(sortedStr) ? map.set(sortedStr, [...map.get(sortedStr), str]) : map.set(sortedStr, [str]);
    return map;
  }, new Map());

  return [...strsMap.values()];
};
```
