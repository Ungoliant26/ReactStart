import { RiFile4Fill } from 'react-icons/ri'
import styles from './Todo.module.css'

function Todo({ todo, index, deleteTodo }) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiFile4Fill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
