import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export const Friend = ({ friend }) => {

    return (
        <div className={styles.friend}>
             <NavLink to={`/profile/${friend.id}`}>
            <img
                src={friend.photos.small || friend.photos.large ||
                    'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'}
                alt={friend.name}
                className={styles.friend__image}
            />
                </NavLink>
            <p className={styles.friend__name}>{friend.name}</p>
        </div>
    )
}
