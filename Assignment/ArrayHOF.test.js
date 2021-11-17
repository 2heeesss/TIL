const todos1 = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const todos2 = [
  { id: 4, content: 'JAVA', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const todos3 = [
  { id: 99, content: 'C', completed: true },
  { id: 0, content: 'C++', completed: false },
];

const render = array => array.reduce(
  (acc, cur) => acc
      + `<li id="${cur.id}">
  <label><input type="checkbox"${cur.completed ? ' checked' : ''}>${cur.content}</label>
</li>
`,
  ''
);

const getValues = (todos, key) => todos.map(obj => obj[key]);

describe('html 생성', () => {
  test('기본예제1', () => {
    expect(render(todos1)).toEqual(
      `<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
`
    );
  });

  test('기본예제2', () => {
    expect(render(todos2)).toEqual(
      `<li id="4">
  <label><input type="checkbox" checked>JAVA</label>
</li>
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
`
    );
  });

  test('기본예제3', () => {
    expect(render(todos3)).toEqual(
      `<li id="99">
  <label><input type="checkbox" checked>C</label>
</li>
<li id="0">
  <label><input type="checkbox">C++</label>
</li>
`
    );
  });
});

describe('특정 프로퍼티 값 추출', () => {
  test('기본예제1', () => {
    expect(getValues(todos1, 'id')).toEqual([3, 2, 1]);
  });

  test('기본예제2', () => {
    expect(getValues(todos2, 'content')).toEqual(['JAVA', 'HTML', 'CSS', 'Javascript']);
  });

  test('기본예제3', () => {
    expect(getValues(todos3, 'id')).toEqual([99, 0]);
  });

  test('기본예제4', () => {
    expect(getValues(todos1, 'completed')).toEqual([false, true, false]);
  });
});
