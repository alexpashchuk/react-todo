import styles from './TodoCount.module.css'

function TodoCount({ completedTodosCount, totalTodosCount }) {
    return (
        <div className={styles.wrapper}>
            <p className={styles.total}>
                <span className={styles.text}>{'total: '}</span>
                <span className={styles.count}>{`${totalTodosCount} `}</span>
                {`${totalTodosCount > 1 ? 'todos' : 'todo'}`}
            </p>
            <p className={styles.completed}>
                <span className={styles.text}>{'completed: '}</span>
                <span className={styles.count}>{`${completedTodosCount} `}</span>
                {`${completedTodosCount > 1 ? 'todos' : 'todo'}`}
            </p>
        </div>
    )
}

export default TodoCount
