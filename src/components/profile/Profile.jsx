import { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'

import { getProfile, addPost } from '../../redux/reducers'
import { Loader } from '../loader'
import { Info } from './info'
import { MyPosts } from './my-posts'

import styles from './index.module.scss'

const Profile = ({userData, profile, getProfile, posts, addPost, isLoading, match }) => {
    // const { userId } = useParams()

    const { userId } = match.params

    useEffect(() => {
        getProfile(userId || userData.id)
    }, [userData.id, userId])

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && (
                <div className={styles.profile}>
                    <p className={styles.title}>Profile</p>
                    <Info profile={profile} />
                    <MyPosts posts={posts} addPost={addPost} />
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
        profile: state.profilePage.profile,
        isLoading: state.loading.isLoading,
        posts: state.profilePage.posts,
    }
}

export const ProfileContainer = withRouter(
    connect(mapStateToProps, {
        getProfile,
        addPost,
    })(Profile)
)
