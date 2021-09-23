import { useEffect } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import { Loader } from '../loader'
import { PaginationContainer } from '../pagination/Pagination.jsx'

import {
    setUsersAC,
    switchFollowAC,
    getUsersThunk,
} from '../../redux/reducers/usersReducer'

import styles from './index.module.scss'

const Users = ({ users, switchFollower, isLoading, getUsers }) => {
    const getPageUsers = (page) => {
        return getUsers(page)
    }
    useEffect(() => {
        getPageUsers(1)
    }, [])

    const onButtonClick = (id) => {
        switchFollower(id)
    }

    const allUsers = users.map((user, index) => {
        return (
            <div className={styles.single__user} key={index}>
                <img
                    src={
                        user.photos.small ||
                        'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'
                    }
                    alt={`${user.name}`}
                    className={styles.single__user__photo}
                />
                <div className={styles.single__user__info}>
                    <p className={styles.single__user__name}>{user.name}</p>
                    <p className={styles.single__user__status}>{user.status}</p>
                </div>
                <Button
                    onClick={() => {
                        onButtonClick(user.id)
                    }}
                    variant="contained"
                    color={user.followed ? 'primary' : 'secondary'}
                >
                    {user.followed ? 'Unfollow' : 'Follow'}
                </Button>
            </div>
        )
    })
    console.log('isLoading', isLoading)
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

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (page) => dispatch(getUsersThunk(page)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        switchFollower: (id) => dispatch(switchFollowAC(id)),
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
