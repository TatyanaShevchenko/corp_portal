export const SWITCH_FOLLOW = 'SWITCH_FOLLOW'
export const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
}

export const switchFollowAC = (payload) => {
    return { type: SWITCH_FOLLOW, payload }
}

export const setUsersAC = (payload) => {
    return { type: SET_USERS, payload }
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.payload] }
        case SWITCH_FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return { ...user, followed: !user.followed }
                    }
                    return user
                }),
            }
        default:
            return state
    }
}
