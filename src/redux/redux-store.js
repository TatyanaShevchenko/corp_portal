import { createStore, combineReducers } from 'redux'

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

let store = createStore(rootReducer)

export default store
