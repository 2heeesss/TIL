const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const render = todos => todos.reduce(
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
  } if (typeof todos[0][key] === 'boolean') {
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

const removeTodo = (todos, id) => todos.filter(val => val.id !== id);

const toggleCompletedById = (todos, id) => todos.map(obj => {
  if (obj.id === id) {
    obj.completed = !obj.completed;
  }
  return obj;
});

const countCompletedTodos = todos => todos.reduce((acc, cur) => {
  let cnt = acc;
  cnt = cur.completed === true ? cnt++ : cnt;
  return cnt;
}, 0);
