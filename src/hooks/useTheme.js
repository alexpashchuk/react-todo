import { useLayoutEffect, useState } from 'react'

export const useTheme = () => {
    const initialState = JSON.parse(localStorage.getItem('app-theme')) || 'light'
    const [theme, setTheme] = useState(initialState)

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('app-theme', JSON.stringify(theme))
    }, [theme])

    return { theme, setTheme }
}
