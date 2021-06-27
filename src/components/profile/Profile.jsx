import { Info } from './info'
import { MyPostsContainer } from './my-posts'

import styles from './index.module.scss'

export const Profile = ({ store }) => {
    return (
        <div className={styles.profile}>
            <p className={styles.title}>Profile</p>
            <Info />
            <MyPostsContainer store={store} />
        </div>
    )
}
