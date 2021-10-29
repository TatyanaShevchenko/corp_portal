import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import {
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
    loadingReducer,
} from './reducers'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
    loading: loadingReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk))

export default store
