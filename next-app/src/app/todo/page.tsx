import { getAllTodos } from "@/api/todos";
import { TodoT } from "@/api/types";
import { TodoList } from "./TodoList";

export default async function TodoPage() {
  const todos: TodoT[] = await getAllTodos();
  return <TodoList todos={todos} />;
}
