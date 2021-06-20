import styles from './index.module.scss'

export const Friend = ({ friend }) => {
    return (
        <div className={styles.friend}>
            <img
                src={friend.image}
                alt={friend.name}
                className={styles.friend__image}
            />
            <p className={styles.friend__name}>{friend.name}</p>
        </div>
    )
}
