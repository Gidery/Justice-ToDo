// Бургер меню

const navIcon = document.querySelector(".nav__icon");
if (navIcon) {
  const navList = document.querySelector(".navlist");
  navIcon.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    navIcon.classList.toggle("-active");
    navList.classList.toggle("-active");
  });
}

// Todo логика

TodoList = document.querySelector(".todoList");
AddBtn = document.querySelector(".addItem-form__submit");
AddInput = document.querySelector(".addItem-form__field");

Todos = [];

if (localStorage.getItem("todo")) {
  Todos = JSON.parse(localStorage.getItem("todo"));
  DisplayTodos();
} else {
  TodoList.innerHTML =
    "<div class='todoList__todo'>Добавте ваше дело в список!</div>";
}

AddBtn.addEventListener("click", () => {
  let NewTodo = AddInput.value;
  if (NewTodo) {
    Todos.push(NewTodo);
    localStorage.setItem("todo", JSON.stringify(Todos));
    DisplayTodos();
  }
});

function DisplayTodos() {
  let DisplayTodo = "";
  Todos.forEach((todo, i) => {
    DisplayTodo += `
    <div id = 'todo_${i}'  class = 'todoList__todo'>${todo}</div>`;
    TodoList.innerHTML = DisplayTodo;
  });
}
