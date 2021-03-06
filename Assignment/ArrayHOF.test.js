const newObj = { id: 4, content: 'Test', completed: false };

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];
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

const sortBy = (todos, key) => {
  if (typeof todos[0][key] === 'string') {
    return todos.sort((firstObj, secondObj) => {
      if (firstObj[key].toUpperCase() < secondObj[key].toUpperCase()) {
        return -1;
      }
      return 1;
    });
  }

  if (typeof todos[0][key] === 'boolean') {
    return todos.sort((firstObj, secondObj) => {
      if (+firstObj[key] === +secondObj[key]) {
        return -1;
      }
      return +firstObj[key] - +secondObj[key];
    });
  }
  return todos.sort((firstObj, secondObj) => firstObj[key] - secondObj[key]);
};

const addTodo = (todos, newTodo) => [newTodo, ...todos];

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

describe('프로퍼티 정렬', () => {
  test('기본예제1', () => {
    expect(sortBy(todos1, 'id')).toEqual(
      [
        { id: 1, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'HTML', completed: false }
      ]
    );
  });
  test('기본예제2', () => {
    expect(sortBy(todos1, 'id')).toEqual(
      [
        { id: 1, content: 'Javascript', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'HTML', completed: false }
      ]
    );
  });
  test('기본예제3', () => {
    expect(sortBy(todos1, 'content')).toEqual(
      [
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'HTML', completed: false },
        { id: 1, content: 'Javascript', completed: false }
      ]
    );
  });
  test('기본예제4', () => {
    expect(sortBy(todos1, 'completed')).toEqual(
      [
        { id: 1, content: 'Javascript', completed: false },
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true }
      ]
    );
  });

  test('확인', () => {
    expect(sortBy([{ content: 'A' }, { content: 'C' }, { content: 'B' }], 'content')).toEqual([{ content: 'A' }, { content: 'B' }, { content: 'C' }]);
  });
});

describe('새로운 요소 추가', () => {
  test('새로운 요소가 추가되면 배열의 가장 첫 요소로 들어간다.', () => {
    expect(addTodo(todos, newObj)).toEqual(
      [
        { id: 4, content: 'Test', completed: false },
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'Javascript', completed: false }
      ]
    );
  });
});

const removeTodo = (todos, id) => todos.filter(val => val.id !== id);

describe('특정 요소 삭제', () => {
  test('배열에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제.', () => {
    expect(removeTodo(todos, 2)).toEqual(
      [
        { id: 3, content: 'HTML', completed: false },
        { id: 1, content: 'Javascript', completed: false }
      ]
    );
  });
});

const toggleCompletedById = (todos, id) => todos.map(obj => {
  if (obj.id === id) {
    obj.completed = !obj.completed;
  }
  return obj;
});

describe('특정 요소의 프로퍼티 값 반전', () => {
  test('배열의 특정 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전', () => {
    expect(toggleCompletedById(todos, 2)).toEqual(
      [
        { id: 3, content: 'HTML', completed: false },
        { id: 2, content: 'CSS', completed: false },
        { id: 1, content: 'Javascript', completed: false }
      ]
    );
  });
});

const toggleCompletedAll = todos => todos.map(obj => {
  obj.completed = true;
  return obj;
});

describe('모든 요소의 completed 프로퍼티 값을 true로 설정', () => {
  test(' 배열의 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수', () => {
    expect(toggleCompletedAll(todos)).toEqual(
      [
        { id: 3, content: 'HTML', completed: true },
        { id: 2, content: 'CSS', completed: true },
        { id: 1, content: 'Javascript', completed: true }
      ]
    );
  });
});

const tt = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const countCompletedTodos = todos => todos.reduce((acc, cur) => {
  let cnt = acc;
  cnt = cur.completed ? ++cnt : cnt;
  return cnt;
}, 0);

describe('completed 프로퍼티의 값이 true인 요소의 갯수 구하기', () => {
  test('todos 배열에서 완료(completed: true)한 할일의 갯수를 구하는 함수를 작성하라.', () => {
    expect(countCompletedTodos(tt)).toBe(1);
  });
});

const getMaxId = todos => (todos.length ? Math.max(...todos.map(obj => obj.id)) : 0);

describe('id 프로퍼티의 값 중에서 최대값 구하기', () => {
  test('배열의 id 프로퍼티 값 중에서 최대값을 구해 반환.', () => {
    expect(getMaxId(todos)).toBe(3);
  });
  test('빈 배열은 0을 반환', () => {
    expect(getMaxId([])).toBe(0);
  });
});
