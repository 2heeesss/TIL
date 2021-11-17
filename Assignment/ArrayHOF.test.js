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
