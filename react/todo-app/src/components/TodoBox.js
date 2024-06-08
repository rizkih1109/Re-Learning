import { useState } from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./Todolist"

export default function TodoBox() {
    const [todos, setTodos] = useState([])

    const addTodo = (title) => {
      setTodos([
        {title},
        ...todos
      ])
    }
  
    return (
      <>
        <TodoForm add={addTodo} />
        <TodoList todos={todos} />
      </>
    )
}