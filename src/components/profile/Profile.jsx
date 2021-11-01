import { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { useParams } from 'react-router-dom'

import { withAuth } from '../../utils/withAuth'
import { profile } from '../../redux/reducers'
import { Loader } from '../loader'
import { Info } from './info'
import { MyPosts } from './my-posts'

import styles from './index.module.scss'
import { compose } from 'redux'
import { Status } from './status'

const Profile = ({
    userData,
    profile,
    status,
    getProfile,
    getProfileStatus,
    posts,
    addPost,
    setStatus,
    isLoading,
    match
}) => {
    // const { userId } = useParams()

    const { userId } = match.params

    useEffect(() => {
        async function fetchData() {
            await getProfile(userId || userData.id)
            getProfileStatus(userId || userData.id)
        }
        fetchData()
    }, [userData.id, userId])

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && (
                <div className={styles.profile}>
                    <p className={styles.title}>Profile</p>
                    <Info profile={profile} />
                    <Status data={status} setStatus={setStatus} />
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
        status: state.profilePage.status,
        isLoading: state.loading.isLoading,
        posts: state.profilePage.posts,
    }
}

export const ProfileContainer = compose(
    connect(mapStateToProps, {
        getProfile: profile.getProfile,
        addPost: profile.addPost,
        setStatus: profile.setMyStatus,
        getProfileStatus: profile.getProfileStatus,
    }),
    withAuth,
    withRouter,
)(Profile)
