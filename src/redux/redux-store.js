import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
    profileReducer,
    dialogsReducer,
    usersReducer,
    loadingReducer,
    authReducer
} from './reducers'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    loading: loadingReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store
