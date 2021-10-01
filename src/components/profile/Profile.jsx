import { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProfile } from '../../redux/reducers/profileReducer'
import { Info } from './info'
import { MyPostsContainer } from './my-posts'

import styles from './index.module.scss'

const Profile = ({ name, status, getProfile }) => {
    const { userId } = useParams()

    useEffect(() => {
        getProfile(userId)
    }, [])

    return (
        <div className={styles.profile}>
            <p className={styles.title}>Profile</p>
            <Info name={name} status={status} />
            <MyPostsContainer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.profilePage.name,
        status: state.profilePage.status,
    }
}
export const ProfileContainer = connect(mapStateToProps, {
    getProfile,
})(Profile)
