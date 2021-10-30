import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

export const User = ({ user, onButtonClick, disabledBtnId }) => {

    return (
        <div className={styles.single__user}>
            <NavLink to={`/profile/${user.id}`}>
                <img
                    src={
                        user.photos.small ||
                        'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'
                    }
                    alt={`${user.name}`}
                    className={styles.single__user__photo}
                />
            </NavLink>
            <div className={styles.single__user__info}>
                <p className={styles.single__user__name}>{user.name}</p>
                <p className={styles.single__user__status}>{user.status}</p>
            </div>
            <Button
                disabled={disabledBtnId.some( el => el=== user.id) }
                onClick={() => {
                    onButtonClick(user.followed, user.id)
                }}
                variant="contained"
                color={user.followed ? 'primary' : 'secondary'}
            >
                {user.followed ? 'Unfollow' : 'Follow'}
            </Button>
        </div>
    )
}
