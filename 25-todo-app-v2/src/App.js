import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoList from './components/Todos/TodoList'
import TodoForm from './components/Todos/TodoForm'
import TodosActions from './components/Todos/TodosActions'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    setTodos([...todos, newTodo])
  }

  const deleteTodoHeandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toogleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const resetTodosHeandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHeandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
  console.log(completedTodosCount)

  return (
    <div className="App">
      <h1>Список дел</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          completedTodosExist={!!completedTodosCount}
          resetTodos={resetTodosHeandler}
          deleteCompletedTodos={deleteCompletedTodosHeandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHeandler}
        toggleTodo={toogleTodoHandler}
      />

      {completedTodosCount > 0 && (
        <h2>{`Вы завершили ${completedTodosCount} ${
          (completedTodosCount == 1 && 'дело') ||
          (completedTodosCount > 1 && 'дела')
        }`}</h2>
      )}
    </div>
  )
}

export default App
