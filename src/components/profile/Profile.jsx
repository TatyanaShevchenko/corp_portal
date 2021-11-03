import { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import { profile } from '../../redux/reducers'
import { Info } from './info'
import { MyPosts } from './my-posts'

import { withAuth } from '../../utils/withAuth'

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
    match,
}) => {
    const { userId } = match.params

    useEffect(() => {
        async function fetchData() {
            await getProfile(userId || userData.id)
            await getProfileStatus(userId || userData.id)
        }
        fetchData()
    }, [userId])

    return (
        <div className={styles.profile}>
            <Info profile={profile} />
            <Status data={status} setStatus={setStatus} />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
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
    withRouter,
    withAuth
)(Profile)
