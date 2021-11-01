import { switchLoadingAC } from './loadingReducer'
import { profileAPI } from '../../api'

export const ADD_POST = 'ADD_POST'
export const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    profile: null,
    status: '',
    posts: [
        { id: 1, message: 'Hello', likesCount: 10 },
        { id: 2, message: 'World', likesCount: 5 },
        { id: 3, message: 'Ololo', likesCount: 23 },
    ],
}

export const setProfile = (payload) => {
    return { type: SET_PROFILE, payload }
}

const setStatus = (payload) => {
    return { type: SET_STATUS, payload }
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // eslint-disable-next-line
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload.message,
                likesCount: 0,
            }

            return { ...state, posts: [...state.posts, newPost] }
        case SET_PROFILE:
            return { ...state, profile: { ...action.payload } }
        case SET_STATUS:
            return { ...state, status: action.payload }
        default:
            return state
    }
}

export const profile = {
    getProfile(userId) {
        return async (dispatch) => {
            dispatch(switchLoadingAC(true))
            try {
                const profile = await profileAPI.getProfile(userId)
                dispatch(setProfile(profile))
                dispatch(switchLoadingAC(false))
            } catch (error) {
                console.warn(error)
            }
        }
    },
    getProfileStatus(userId) {
        return async (dispatch) => {
            try {
                const status = await profileAPI.getStatus(userId)
                dispatch(setStatus(status))
            } catch (error) {
                console.warn(error)
            }
        }
    },
    setMyStatus(status) {
        return async (dispatch) => {
            try {
                const res = await profileAPI.setMyStatus(status)
                if (res.status === 200) {
                    dispatch(setStatus(status))
                }
            } catch (error) {
                console.warn(error)
            }
        }
    },
    addPost(payload) {
        return { type: ADD_POST, payload }
    },
}
