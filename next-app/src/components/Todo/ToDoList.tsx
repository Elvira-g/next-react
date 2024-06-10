'use client'

import { TodoType } from "@/types/types";
import React from 'react';
import s from './todo.module.css'
import { Todo } from "./Todo";

type Props = {
    todoList: TodoType[]
}

export const ToDoList = ({ todoList}: Props) => {
    return (
      <div className={s.todoList}>
        {todoList.map((item, key) => <Todo key={key} todo={item} />)}
      </div>
    );
};
