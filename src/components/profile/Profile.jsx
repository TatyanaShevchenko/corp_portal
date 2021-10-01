import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProfile } from '../../redux/reducers/profileReducer'
import { Loader } from '../loader'
import { Info } from './info'
import { MyPostsContainer } from './my-posts'

import styles from './index.module.scss'

const Profile = ({ profile, getProfile, isLoading }) => {
    const { userId } = useParams()

    useEffect(() => {
        getProfile(userId)
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading && (
                <div className={styles.profile}>
                    <p className={styles.title}>Profile</p>
                    <Info profile={profile} />
                    <MyPostsContainer />
                </div>
            )}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLoading: state.loading.isLoading,
    }
}

export const ProfileContainer = connect(mapStateToProps, {
    getProfile,
})(Profile)
