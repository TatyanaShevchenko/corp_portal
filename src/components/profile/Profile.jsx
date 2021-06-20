import { Info } from './info'
import { MyPosts } from './my-posts'

import styles from './index.module.scss'

export const Profile = ({ posts }) => {
    return (
        <div className={styles.profile}>
            <p className={styles.title}>Profile</p>
            <Info />
            <MyPosts posts={posts} />
        </div>
    )
}
