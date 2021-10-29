import {getAuthorisedData} from '../../api'
import { switchLoadingAC } from './loadingReducer'

const SET_USER_INFO = 'SET_USER_INFO'
const SET_USER_MESSAGES = 'SET_USER_MESSAGES'


export const getAuthorisedInfo =()=> async(dispatch)=>{
    dispatch(switchLoadingAC(true))
    try {
        const authorisedUserInfo = await getAuthorisedData()
        dispatch(setUserInfo(authorisedUserInfo))
        dispatch(setUserMessages(authorisedUserInfo))
        dispatch(switchLoadingAC(false))
    } catch (error) {
        console.warn(error)
    }
}

export const setUserInfo = (payload) => {
    return { type: SET_USER_INFO, payload }
}

export const setUserMessages = (payload) => {
    return { type: SET_USER_MESSAGES, payload }
}

let initialState = {
    resultCode: 1,
    messages: [],
    data: {
      id: null,
      email: null,
      login: null
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, data: {...action.payload.data} }
        case SET_USER_MESSAGES:
            return {...state, messages:[...action.payload.messages]}
        default:
            return state
    }
}