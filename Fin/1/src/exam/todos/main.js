/* eslint-disable */

// 외부 js 파일 사용 시 window.onload 안 됨
// https://github.com/codesandbox/codesandbox-client/issues/4683

const $input = document.querySelector(".input-todo");
const $todos = document.querySelector(".todos");

let todos = JSON.parse(localStorage.getItem("todos"));
if (!todos) {
  todos = [
    { id: 1, content: "HTML", completed: true },
    { id: 2, content: "CSS", completed: true },
    { id: 3, content: "Javascript", completed: false },
  ];
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos)); // localStorage에 리스트 저장
}

function findMaxId() {
  return Math.max(0, ...todos.map((todo) => todo.id));
}

function addTodos(e) {
  // * keyCode는 Deprecated 되었습니다.
  // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
  if (e.code === "Enter" && $input.value.trim() !== "") {
    todos.push({
      id: findMaxId() + 1,
      content: $input.value,
      completed: false,
    });
    render();
    $input.value = "";
    return false;
  }
}

const removeTodos = function (e) {
  if (!e.target.classList.contains("remove")) return;

  const listId = +e.target.parentNode.id;
  todos.splice(
    todos.findIndex((todo) => todo.id === listId),
    1
  );

  // Id 재정렬
  if (todos.length !== findMaxId()) {
    todos = todos.map((todo, index) => ({ ...todo, id: index + 1 }));
  }
  render();
};

const toggleTodos = function (e) {
  const listId = +e.target.parentNode.parentNode.id;
  const idx = todos.findIndex((todo) => todo.id === listId);
  todos[idx].completed = !todos[idx].completed;

  render();
};

function render() {
  if ($todos) {
    $todos.innerHTML = todos
      .map(
        (todo) =>
          `<li id=${todo.id}>
      <label>
        <input type="checkbox"  ${todo.completed ? "checked" : ""}>
        ${todo.content}
      </label>
      <span class="remove">X</span>
    </li>`
      )
      .join("");
    saveTodos();
  }
}
setTimeout(render, 1000);

if ($input && $todos) {
  $input.onkeypress = addTodos;
  $todos.onclick = removeTodos;
  $todos.onchange = toggleTodos;
}
