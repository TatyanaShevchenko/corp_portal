import FavoriteIcon from '@material-ui/icons/Favorite'

import styles from './index.module.scss'

export const Post = ({ message, likesCount }) => {
    return (
        <div className={styles.post}>
            <p className={styles.post__text}>{message}</p>
            <span className={styles.post__likes}>
                <FavoriteIcon color="secondary" fontSize="small" />
                {likesCount}
            </span>
        </div>
    )
}
