import styles from './index.module.scss'

export const Message = ({ msg }) => {
    return <div className={styles.message}>{msg}</div>
}
