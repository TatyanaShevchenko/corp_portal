import FavoriteIcon from '@material-ui/icons/Favorite'

import styles from './index.module.scss'

export const Post = ({ message, likesCount }) => {
    return (
        <div className={styles.post}>
            <img
                src="https://i.pinimg.com/originals/ec/9b/94/ec9b9421e395df28671bb26c9e44a92e.jpg"
                alt="Avatar"
                className={styles.avatar}
            />
            <p className={styles.post__text}>{message}</p>
            <span className={styles.post__likes}>
                <FavoriteIcon color="secondary" fontSize="small" />
                {likesCount}
            </span>
        </div>
    )
}
