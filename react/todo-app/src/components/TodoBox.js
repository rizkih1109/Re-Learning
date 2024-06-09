import { useEffect, useState } from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./Todolist"
import { useNavigate } from 'react-router-dom';
import { haveToken } from '../util';
import Logout from './Logout';
import axios from 'axios';

export default function TodoBox() {
  let navigate = useNavigate()
  const [todos, setTodos] = useState([])
  const [user, setUser] = useState({})

  const addTodo = (title) => {
    setTodos([
      ...todos,
      { title }
    ])

    axios.post('http://localhost:3000/todos', {
      title
    }, {
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
  }

  useEffect(() => {
    haveToken(navigate, async (response) => {
      setUser(response)
      const { data } = await axios.get('http://localhost:3000/todos', {
        headers: {
          Authorization: `Bearer ${response.token}`
        }
      })
      setTodos(data)
    })
  }, [navigate])

  return (
    <>
      <Logout />
      <TodoForm add={addTodo} />
      <TodoList todos={todos} />
    </>
  )
}