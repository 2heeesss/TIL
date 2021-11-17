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

render(todos);
