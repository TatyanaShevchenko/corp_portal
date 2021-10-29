import { switchLoadingAC } from './loadingReducer'
import { getUsers, getPagesCount, followUser, unfollowUser} from '../../api'

// export const SWITCH_FOLLOW = 'SWITCH_FOLLOW'
export const FOLLOW_USER = 'FOLLOW_USER'
export const UNFOLLOW_USER = 'UNFOLLOW_USER'
export const SET_USERS = 'SET_USERS'
export const SET_PAGES = 'SET_PAGES'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    pages: 0,
    currentPage: 1,
}

export const followUserAC =  (payload) => {
    return { type: FOLLOW_USER, payload }
}

export const unfollowUserAC = (payload) => {
    return { type: UNFOLLOW_USER, payload}
}

export const setUsersAC = (payload) => {
    return { type: SET_USERS, payload }
}

export const setPagesAC = (payload) => {
    return { type: SET_PAGES, payload }
}

export const setCurrentPage = (payload) => {
    return { type: SET_CURRENT_PAGE, payload }
}

export const getAllUsers = (page) => async (dispatch) => {
    dispatch(switchLoadingAC(true))
    try {
        const usersFromAPI = await getUsers(page)
        dispatch(setUsersAC(usersFromAPI))
        dispatch(switchLoadingAC(false))
    } catch (error) {
        console.warn(error)
    }
}

export const setPages = () => async (dispatch) => {
    try {
        const pagesCount = await getPagesCount()
        dispatch(setPagesAC(pagesCount))
    } catch (error) {
        console.warn(error)
    }
}

export const followUserId =(id) => async(dispatch)=>{
    dispatch(switchLoadingAC(true))
    try {
        const res = await followUser(id)
        dispatch(followUserAC(id))
        dispatch(switchLoadingAC(false))
    } catch (error) {
        console.warn(error)
    }
}

export const unfollowUserId =(id) => async(dispatch)=>{
    dispatch(switchLoadingAC(true))
    try {
        const res = await unfollowUser(id)
        dispatch(unfollowUserAC(id))
        dispatch(switchLoadingAC(false))
    } catch (error) {
        console.warn(error)
    }
}


export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: [...action.payload] }
        case SET_PAGES:
            return { ...state, pages: action.payload }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.payload }
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return { ...user, followed: true}
                        }
                    return user
                }),
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload) {
                        return { ...user, followed: false}
                    }
                    return user
                }),
            }
        default:
            return state
    }
}
