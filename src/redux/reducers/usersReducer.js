import { switchLoadingAC } from './loadingReducer'
import { getUsers, getPagesCount } from '../../api'

export const SWITCH_FOLLOW = 'SWITCH_FOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_PAGES = 'SET_PAGES'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    pages: 0,
    currentPage: 1,
}

export const switchFollowAC = (payload) => {
    return { type: SWITCH_FOLLOW, payload }
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
        const usersFromAPI = getUsers(page)
        usersFromAPI.then((users) => {
            dispatch(setUsersAC(users))
            dispatch(switchLoadingAC(false))
        })
    } catch (error) {
        console.warn(error)
    }
}

export const setPages = () => async (dispatch) => {
    try {
        const pagesCount = getPagesCount()
        pagesCount.then((count) => {
            dispatch(setPagesAC(count))
        })
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
