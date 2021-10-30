import { useEffect } from 'react'
import { connect } from 'react-redux'

import { User } from './components/User.jsx'
import { Loader } from '../loader'
import { PaginationContainer } from '../pagination/Pagination.jsx'

import {
    setUsersAC,
    followUserId,
    unfollowUserId,
    getAllUsers,
    getAllFriends
} from '../../redux/reducers/usersReducer'

import styles from './index.module.scss'

const Users = ({ users, followUserId, unfollowUserId,  isLoading, getUsers, getAllFriends }) => {
    useEffect(() => {
        getUsers()
    }, [])

    const switchFollow= async (isFollowed, id) =>{
        if (isFollowed) {
          await  unfollowUserId(id)
        } else {
          await  followUserId(id)
        }
        getAllFriends()
    }

    const allUsers = users.map((user, index) => (
        <User
            key={index}
            user={user}
            onButtonClick={switchFollow}
        />
    ))

    return (
        <div className={styles.users}>
            <PaginationContainer />
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <p className={styles.title}>All users</p>
                    <div className={styles.all__users}>{allUsers}</div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        isLoading: state.loading.isLoading,
    }
}

export const UsersContainer = connect(mapStateToProps, {
    getUsers: getAllUsers,
    setUsers: setUsersAC,
    followUserId,
    unfollowUserId,
    getAllFriends
    
})(Users)
