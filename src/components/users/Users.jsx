import { useEffect } from 'react'
import { connect } from 'react-redux'

import { User } from './components/User.jsx'
import { Loader } from '../loader'
import { PaginationContainer } from '../pagination/Pagination.jsx'

import {
    setUsersAC,
    switchFollowAC,
    getAllUsers,
} from '../../redux/reducers/usersReducer'

import styles from './index.module.scss'

const Users = ({ users, switchFollower, isLoading, getUsers }) => {
    useEffect(() => {
        getUsers(1)
    }, [])

    const allUsers = users.map((user, index) => (
        <User
            key={index}
            user={user}
            onButtonClick={(id) => switchFollower(id)}
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
    switchFollower: switchFollowAC,
})(Users)
