import { connect } from 'react-redux'

import { Friend } from './friend'
import {users, selectFriends} from '../../../redux/reducers/usersReducer'

import styles from './index.module.scss'
import { useEffect } from 'react'

const Friends = ({ friends, getAllFriends }) => {
    
    useEffect(async()=>{
        getAllFriends()
    }, [])

    return (
        <div className={styles.friends}>
            <p className={styles.title}>Friends</p>
            <div className={styles.grid}>
                {!!friends.length &&
                    friends.map((friend) => (
                        <Friend key={friend.id} friend={friend} />
                    ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        friends:selectFriends(state)
    }
}

export const FriendsContainer = connect(mapStateToProps, {
    getAllFriends: users.getAllFriends
})(Friends)