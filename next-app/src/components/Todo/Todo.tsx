"use client";

import { compleateTodo } from "@/api/todos";
import { TodoT } from "@/api/types";
import { Checkbox } from "antd";
import { useState } from "react";

type Props = {
  todo: TodoT;
};

export const Todo = ({ todo }: Props) => {
  const [completed, setCompleted] = useState(todo.completed);
  const onChange = () => {
    compleateTodo(todo, completed).then((res) => setCompleted(res.completed));
  };

  return (
    <>
      {completed ? (
        <Checkbox onChange={onChange}>{todo.title}</Checkbox>
      ) : (
        <Checkbox onChange={onChange} defaultChecked>
          {todo.title}
        </Checkbox>
      )}
    </>
  );
};
