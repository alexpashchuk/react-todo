import { useState } from 'react'
import Button from './UI/Button'
import classNames from 'classnames'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
    const [text, setText] = useState('')
    const [inputValid, setInputValid] = useState(true)

    const onChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setInputValid(true)
        }
        setText(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (text.trim().length === 0) {
            setInputValid(false)
            return null
        }
        addTodo(text)
        setText('')
    }

    const placeholderText = inputValid ? 'Enter new todo' : 'Please Enter Todo...'

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input
                    className={classNames(styles.input, !inputValid && styles.inputValid)}
                    type="text"
                    placeholder={placeholderText}
                    value={text}
                    onChange={onChangeHandler}
                />
                <Button type="submit" title="Submit">
                    {'Submit'}
                </Button>
            </form>
        </div>
    )
}

export default TodoForm
