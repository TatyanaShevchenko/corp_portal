import { createStore, combineReducers } from 'redux'

import {
    profileReducer,
    dialogsReducer,
    navbarReducer,
    usersReducer,
} from './reducers'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
})

let store = createStore(rootReducer)

export default store
