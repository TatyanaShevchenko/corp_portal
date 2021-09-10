import { useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import Button from '@material-ui/core/Button'

import { setUsersAC, switchFollowAC } from '../../redux/reducers/usersReducer'

import styles from './index.module.scss'

const Users = ({ users, switchFollower, setUsers }) => {
    const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

    async function getInitialUsers() {
        try {
            const usersFromAPI = await axios.get(`${BASE_URL}/users`)
            setUsers(usersFromAPI.data.items)
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(() => {
        getInitialUsers()
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
            <p className={styles.title}>All users</p>
            {allUsers}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
        switchFollower: (id) => dispatch(switchFollowAC(id)),
    }
}

export const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Users)
