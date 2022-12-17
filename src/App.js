import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodosActions from './components/TodosActions'
import TodoCount from './components/TodoCount'
import TodoHeader from './components/TodoHeader'

import { useTheme } from './hooks/useTheme'
import ReactSwitch from 'react-switch'
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
    const { theme, setTheme } = useTheme()
    const darkThemeHandle = () => {
        setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
    }

    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState)

    const addTodoHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4()
        }
        setTodos([...todos, newTodo])
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const editTodoHandler = (id, editText, setEditText) => {
        const newEditTodo = todos.map((todo) => {
            if (todo.id === id) {
                todo.text = editText
            }
            return todo
        })
        setTodos(newEditTodo)
        setEditText(false)
    }

    const toggleTodoHandler = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo })))
    }

    const resetTodosHandler = () => {
        setTodos([])
    }

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted))
    }

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length
    const totalTodosCount = todos.length

    return (
        <div className="App">
            <ReactSwitch
                className="mb-4"
                checked={theme === 'light'}
                onChange={darkThemeHandle}
                offColor="#808080"
                onColor="#ffffff"
                offHandleColor="#003366"
                onHandleColor="#000000"
                checkedIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                            fontSize: '20px',
                            color: 'orange'
                        }}
                    >
                        <FaSun />
                    </div>
                }
                uncheckedIcon={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'yellow',
                            fontSize: '18px',
                            height: '100%'
                        }}
                    >
                        <FaMoon />
                    </div>
                }
            />
            <TodoHeader />
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodosActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                />
            )}
            {(completedTodosCount > 0 || totalTodosCount > 0) && (
                <TodoCount completedTodosCount={completedTodosCount} totalTodosCount={totalTodosCount} />
            )}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
                editTodo={editTodoHandler}
            />
        </div>
    )
}

export default App
