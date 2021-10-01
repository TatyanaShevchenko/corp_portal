import styles from './index.module.scss'

export const Info = ({ name, status }) => {
    return (
        <div className={styles.info}>
            <p className={styles.title}>{name}</p>
            <p className={styles.status}>{status}</p>
        </div>
    )
}
