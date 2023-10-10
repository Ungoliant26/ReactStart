import { MdCommentBank } from 'react-icons/md'
import { useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <Button type="submit" title="Создать задачу">
          <MdCommentBank />
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
