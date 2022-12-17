import { createContext, useState } from 'react'

export const TodoContext = createContext(null)

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(null)
    return <TodoContext.Provider value={{ todos, setTodos }}>{children}</TodoContext.Provider>
}
