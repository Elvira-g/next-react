'use client'

import React, { useState } from 'react';
import { Button } from 'antd';
import s from './todo.module.css'
import { TodoType } from '@/types/types';

type Props = {
    initialList: TodoType[]
}

  
export const TodoForm: React.FC<Props> = ({initialList}) => {
    const [todoList, setTodoList] = useState<TodoType[]>(initialList);
    const [title, setTitle] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newTask: TodoType = {
            userId: 1,
            id: 1,
            title: title,
            completed: false,
        };

        setTodoList([newTask, ...todoList]);
        addData(newTask)
    };

    return (
        <div className={s.todoFormBlock}>
            <form className={s.form} onSubmit={handleSubmit}>
                <textarea className={s.formTeaxtarea} name='title' onChange={e => setTitle(e.target.value)}/>
                <Button className={s.formBtn} type="primary" htmlType="submit">
                    Create
                </Button>
            </form>
        </div>
        
    )

}

async function addData(todo: TodoType) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
}