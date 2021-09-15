import { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import { getUsers } from '../../api'

import { Loader } from '../loader'
import { PaginationContainer } from '../pagination/Pagination.jsx'

import { setUsersAC, switchFollowAC } from '../../redux/reducers/usersReducer'
import { switchLoadingAC } from '../../redux/reducers/loadingReducer'

import styles from './index.module.scss'

const Users = ({
    users,
    switchFollower,
    setUsers,
    isLoading,
    setIsLoading,
}) => {
    useEffect(() => {
        setIsLoading(true)
        const initialUsers = getUsers(1)
        initialUsers.then((users) => {
            setUsers(users)
            setIsLoading(false)
        })
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
    return (
        <div className={styles.users}>
            {isLoading && <Loader />}
            {!isLoading && (
                <>
                    <p className={styles.title}>All users</p>
                    <div className={styles.all__users}>{allUsers}</div>
                    <PaginationContainer />
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
        setUsers: (users) => dispatch(setUsersAC(users)),
        switchFollower: (id) => dispatch(switchFollowAC(id)),
        setIsLoading: (isLoading) => dispatch(switchLoadingAC(isLoading)),
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
