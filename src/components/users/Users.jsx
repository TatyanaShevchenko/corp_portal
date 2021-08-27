import { useEffect } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { setUsersAC, switchFollowAC } from '../../redux/reducers/usersReducer'

import styles from './index.module.scss'

const Users = ({ users, switchFollower, setUsers }) => {
    const initialUsers = [
        {
            id: 1,
            followed: true,
            photo: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
            name: 'Olga',
            status: 'Some text',
            location: { city: 'Moscow', country: 'Russia' },
        },
        {
            id: 2,
            followed: false,
            photo: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
            name: 'Alex',
            status: 'Some text',
            location: { city: 'Linz', country: 'Austria' },
        },
        {
            id: 3,
            followed: true,
            photo: 'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png',
            name: 'Tatiana',
            status: 'Some text',
            location: { city: 'Wels', country: 'Austria' },
        },
    ]

    useEffect(() => {
        setUsers(initialUsers)
    }, [])

    const onButtonClick = (id) => {
        switchFollower(id)
    }

    const allUsers = users.map((user, index) => {
        return (
            <div className={styles.single__user} key={index}>
                <img
                    src={user.photo}
                    alt={`${user.name}`}
                    className={styles.single__user__photo}
                />
                <div className={styles.single__user__info}>
                    <p className={styles.single__user__name}>{user.name}</p>
                    <p className={styles.single__user__status}>{user.status}</p>
                    <p className={styles.single__user__location}>
                        {user.location.city},{user.location.country}
                    </p>
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
