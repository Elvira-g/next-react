import { TodoForm } from "@/components/Todo/TodoForm";
import { ToDoList } from "@/components/Todo/ToDoList";
import { TodoType } from "@/types/types";

export default async function TodoPage () {
    const todoList: TodoType[] = await getData()

    return ( <>
        <ToDoList todoList={todoList}  />
        <TodoForm initialList={todoList}/>
    </>

    )
}

async function getData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    return response.json()
}
