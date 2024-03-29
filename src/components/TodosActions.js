import Button from './UI/Button'
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import styles from './TodosActions.module.css'

function TodosActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset Todos">
                <RiRefreshLine onClick={resetTodos} />
            </Button>
            <Button title="Clear Completed Todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}

export default TodosActions
