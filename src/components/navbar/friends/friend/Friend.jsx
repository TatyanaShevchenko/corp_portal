import styles from './index.module.scss'

export const Friend = ({ friend }) => {
    return (
        <div className={styles.friend}>
            <img
                src={friend.image || 
                    'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
                alt={friend.name}
                className={styles.friend__image}
            />
            <p className={styles.friend__name}>{friend.name}</p>
        </div>
    )
}
