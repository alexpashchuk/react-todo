import { useState } from 'react'
import { RiDeleteBin2Line, RiTodoLine } from 'react-icons/ri'
import { FaCheck, FaEdit, FaRegWindowClose, FaSave } from 'react-icons/fa'
import classNames from 'classnames'
import styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo, editTodo }) {
    const [edit, setEdit] = useState(false)
    const [editText, setEditText] = useState('')

    const textTodo = (text) => {
        setEditText(text)
        setEdit(true)
    }

    const saveEditTodo = (id) => {
        editTodo(id, editText, setEditText)
        setEdit(false)
    }

    const closeEditTodo = () => {
        setEdit(false)
    }

    return (
        <div
            className={classNames(
                `${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`,
                edit && styles.edit
            )}
        >
            <RiTodoLine className={`${styles.todoIcon} ${edit ? styles.todoIconEdit : ''}`} />
            {edit ? (
                <div className={styles.wrapper}>
                    <textarea
                        className={styles.inputEdit}
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <FaSave className={styles.saveIcon} title={'Save Edit'} onClick={() => saveEditTodo(todo.id)} />
                    <FaRegWindowClose
                        className={styles.closeIcon}
                        title={'Close Edit'}
                        onClick={() => closeEditTodo()}
                    />
                </div>
            ) : (
                <div className={styles.wrapper}>
                    <textarea disabled className={styles.inputEdit} value={todo.text} />
                    <RiDeleteBin2Line
                        className={styles.deleteIcon}
                        title={'Delete'}
                        onClick={() => deleteTodo(todo.id)}
                    />
                    <FaEdit className={styles.editIcon} title={'Edit'} onClick={() => textTodo(todo.text)} />
                    <FaCheck className={styles.checkIcon} title={'Complete'} onClick={() => toggleTodo(todo.id)} />
                </div>
            )}
        </div>
    )
}

export default Todo
