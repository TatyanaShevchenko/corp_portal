import { Friend } from './friend'
import styles from './index.module.scss'

export const Friends = ({ friends }) => {
    return (
        <div className={styles.friends}>
            <p className={styles.title}>Friends</p>
            <div className={styles.grid}>
                {!!friends.length &&
                    friends.map((friend) => (
                        <Friend key={friend.id} friend={friend} />
                    ))}
            </div>
        </div>
    )
}
