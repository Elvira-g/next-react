"use client";

import { TodoT } from "@/api/types";
import { Todo } from "./Todo";
import s from "./todo.module.css";

export const ToDoList = ({ todos }: { todos: TodoT[] }) => {
  return (
    <div className={s.todoList}>
      {todos.map((item, key) => (
        <Todo key={key} todo={item} />
      ))}
    </div>
  );
};
