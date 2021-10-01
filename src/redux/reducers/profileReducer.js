import { switchLoadingAC } from './loadingReducer'
import { getUserProfile } from '../../api'

export const ADD_POST = 'ADD_POST'
export const SET_PROFILE = 'SET_PROFILE'

let initialState = {
    name: 'Tanya',
    status: 'Wanna be in Austria',
    posts: [
        { id: 1, message: 'Hello', likesCount: 10 },
        { id: 2, message: 'World', likesCount: 5 },
        { id: 3, message: 'Ololo', likesCount: 23 },
    ],
}

export const addPost = (payload) => {
    return { type: ADD_POST, payload }
}

export const setProfile = (payload) => {
    return { type: SET_PROFILE, payload }
}

export const getProfile = (userId) => async (dispatch) => {
    // dispatch(switchLoadingAC(true))
    try {
        const profile = await getUserProfile(userId)
        console.log('profile', profile)
        dispatch(setProfile(profile))
        // dispatch(switchLoadingAC(false))
    } catch (error) {
        console.warn(error)
    }
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
            return { ...state, name: action.payload.fullName }
        default:
            return state
    }
}
