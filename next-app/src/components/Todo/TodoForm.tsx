"use client";

import { postTodo } from "@/api/todos";
import { TodoT } from "@/api/types";
import { Button } from "antd";
import React, { SetStateAction, useState } from "react";
import s from "./todo.module.css";

export const TodoForm = ({
  addToDO,
}: {
  addToDO: React.Dispatch<SetStateAction<TodoT[]>>;
}) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask: TodoT = {
      userId: 1,
      id: 1,
      title: title,
      completed: false,
    };
    postTodo(newTask)
      .then((response) => {
        addToDO((prev) => [response, ...prev]);
      })
      .catch(() => alert("Error"));
  };

  return (
    <div className={s.todoFormBlock}>
      <form className={s.form} onSubmit={handleSubmit}>
        <textarea
          className={s.formTeaxtarea}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button className={s.formBtn} type="primary" htmlType="submit">
          Create
        </Button>
      </form>
    </div>
  );
};
