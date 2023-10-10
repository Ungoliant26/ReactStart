import { RiFile4Fill, RiDeleteBin2Fill } from 'react-icons/ri'
import { AiFillCheckCircle } from 'react-icons/ai'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiFile4Fill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <AiFillCheckCircle
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <RiDeleteBin2Fill
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
