import api from "./api.js";
import * as todoList from "./webApi.js";

import { asyncProvider } from "./helpers.js"

const CREEDS = {
  name: "Yura Franasiuk",
  email: "yura.franasiuk@gmail.com",
  password: "12345678",
  age: 22
}

window.login = () => {
  asyncProvider(async () => {
    await api.login(CREEDS.email, CREEDS.password);

    const todos = await api.fetchAllTodoItems();
    todoList.insertAllTodosToHtml(todos.reverse());
  })
};

window.register = () => {
  asyncProvider(async () => {
    await api.register(
        CREEDS.name, CREEDS.email,
        CREEDS.password, CREEDS.age
    );

    const todos = await api.fetchAllTodoItems();
    todoList.insertAllTodosToHtml(todos.reverse());
  })
};

window.addTodo = () => {
  const input = document.getElementById("descriptionInput");
  const description = input.value;

  asyncProvider(async () => {
    const todo = await api.addTodoItem(description);
    todoList.insertSingleTodoToHtml(todo);
  });

  input.value = "";
};

window.modifyTodo = (_id, completed) => {
  asyncProvider(async () => {
    await api.updateTodoItem(_id, !completed);
    todoList.updateTodoState(_id);
  });
};

window.removeTodo = (_id) => {
  asyncProvider(async () => {
    await api.removeTodoItem(_id);
    todoList.removeFromHtmlById(_id);
  });
};
