import { TodoT } from "./types";

export const getAllTodos = () =>
  fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then((res) => res.json())
    .catch(() => []);

export const postTodo = (todo: TodoT) => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: todo.title,
      completed: todo.completed,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

export const compleateTodo = async (todo: TodoT, isComplited: boolean) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
    method: "PUT",
    body: JSON.stringify({
      completed: isComplited,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};
