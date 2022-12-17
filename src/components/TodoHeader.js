import { GoMarkGithub } from 'react-icons/go'
import styles from './TodoHeader.module.css'

function TodoHeader() {
    return (
        <div className={styles.wrapper}>
            <a rel="noreferrer" target="_blank" href="https://github.com/alexpashchuk" className={styles.link}>
                {'Todo App'}
                <GoMarkGithub className={styles.icon} />
                <span className={styles.decoration}></span>
            </a>
        </div>
    )
}

export default TodoHeader
