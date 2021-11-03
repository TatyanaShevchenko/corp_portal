import { authAPI } from '../../api'
import { switchLoadingAC } from './loadingReducer'

const SET_AUTH = 'SET_AUTH'
const SET_USER_INFO = 'SET_USER_INFO'
const SET_USER_MESSAGES = 'SET_USER_MESSAGES'

let initialState = {
    resultCode: 1,
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
}

const setAuth = (payload) => {
    return { type: SET_AUTH, payload }
}
const setUserInfo = (payload) => {
    return { type: SET_USER_INFO, payload }
}

const setUserMessages = (payload) => {
    return { type: SET_USER_MESSAGES, payload }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, data: { ...action.payload.data } }
        case SET_USER_MESSAGES:
            return { ...state, messages: [...action.payload.messages] }
        case SET_AUTH:
            return { ...state, isAuth: action.payload }
        default:
            return state
    }
}

export const auth = {
    getAuthorisedInfo() {
        return async (dispatch) => {
            dispatch(switchLoadingAC(true))
            try {
                const authorisedUserInfo = await authAPI.getAuthorisedData()
                if (authorisedUserInfo.resultCode === 0) {
                    dispatch(setUserInfo(authorisedUserInfo))
                    dispatch(setUserMessages(authorisedUserInfo))
                    dispatch(setAuth(true))
                } else {
                    dispatch(setAuth(false))
                }
            } catch (error) {
                console.warn(error)
            } finally {
                dispatch(switchLoadingAC(false))
            }
        }
    },
    login(email,password,rememberMe, captcha){
        return async (dispatch) => {
            dispatch(switchLoadingAC(true))
            try {
                const authorisedUserInfo = await authAPI.login(email,password,rememberMe, captcha)
                if (authorisedUserInfo.resultCode === 0) {
                    dispatch(setUserInfo(authorisedUserInfo))
                    dispatch(setUserMessages(authorisedUserInfo))
                    dispatch(setAuth(true))
                } else {
                    dispatch(setAuth(false))
                    return authorisedUserInfo
                }
            } catch (error) {
                console.warn(error)
            } finally {
                dispatch(switchLoadingAC(false))
            } 
        }
    }, 
    logout (){
        return async (dispatch) => {
            dispatch(switchLoadingAC(true))
            try {
                const res = await authAPI.logout()
                if (res.resultCode === 0) {
                    dispatch(setUserInfo(res))
                    dispatch(setUserMessages(res))
                    dispatch(setAuth(false))
                } else {
                    console.warn('something went wrong')
                }
            } catch (error) {
                console.warn(error)
            } finally {
                dispatch(switchLoadingAC(false))
            } 
        }
    }
}
