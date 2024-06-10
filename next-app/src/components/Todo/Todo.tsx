'use client'

import { TodoType } from "@/types/types";
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

type Props = {
    todo: TodoType
}

export const Todo = ({ todo }: Props) => {
    
    const [completed, setCompleted] = useState(todo.completed)

    const onChange: CheckboxProps['onChange'] = () => {
        setCompleted(!completed)
        changeData(todo, completed)
    };

    return <>
        {completed ? <Checkbox onChange={onChange} >{todo.title}</Checkbox> : <Checkbox onChange={onChange} defaultChecked disabled >{todo.title}</Checkbox>}
    </>
    
};

async function changeData(todo: TodoType, isComplited: boolean) {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify({
            completed: isComplited
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((response) => console.log(response))
}