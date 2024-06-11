"use client";

import { TodoT } from "@/api/types";
import { ToDoList } from "@/components/Todo/ToDoList";
import { TodoForm } from "@/components/Todo/TodoForm";
import { useState } from "react";

export const TodoList = ({ todos }: { todos: TodoT[] }) => {
  const [list, setList] = useState(todos);
  return (
    <>
      <TodoForm addToDO={setList} />
      <ToDoList todos={list} />
    </>
  );
};
