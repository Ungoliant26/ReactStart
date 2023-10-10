import { MdOutlineRefresh, MdDeleteForever } from 'react-icons/md'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Удалить все задачи" onClick={resetTodos}>
        <MdOutlineRefresh />
      </Button>
      <Button
        title="Удалить завершённые"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <MdDeleteForever />
      </Button>
    </div>
  )
}

export default TodosActions
