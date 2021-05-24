let todos = [];

const $input = document.querySelector(".input-todo");
const $todos = document.querySelector(".todos");

function render() {
  let html = "";

  todos.forEach((todo) => {
    html += `
    <li id=${todo.id}>
      <label>
        <input type="checkbox" class="check-box" ${
          todo.completed ? "checked" : ""
        }>
        ${todo.content}
      </label>
      <span class="remove">X</span>
    </li>
    `;
  });
  $todos.innerHTML = html;
  console.log(todos);
}

const getTodos = function () {
  // TODO: 서버로부터 데이터를 취득.
  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false },
  ];
  render();
};

function findMaxId() {
  return Math.max(0, ...todos.map((todo) => todo.id));
}

const addTodos = function (e) {
  if (e.keyCode !== 13 || $input.value.trim() === "") return;

  todos = [
    ...todos,
    { id: findMaxId() + 1, content: $input.value, completed: false },
  ];
  $input.value = "";

  render();
};

const removeTodos = function (e) {
  if (!e.target.classList.contains("remove")) return;

  const listId = +e.target.parentNode.id;
  todos = todos.filter((todo) => todo.id !== listId);

  // Id 재정렬
  if (todos.length !== findMaxId()) {
    todos = todos.map((todo, index) => ({ ...todo, id: index + 1 }));
  }
  render();
};

const toggleTodos = function (e) {
  const listId = +e.target.parentNode.parentNode.id;
  todos = todos.map((todo) =>
    todo.id === listId ? { ...todo, completed: !todo.completed } : todo
  );

  render();
};

window.onload = getTodos;
$input.onkeydown = addTodos;
$todos.onclick = removeTodos;
$todos.onchange = toggleTodos;
