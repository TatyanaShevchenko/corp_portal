import { createStore, combineReducers } from 'redux'

import { profileReducer, dialogsReducer, navbarReducer } from './reducers'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
})

let store = createStore(rootReducer)

export default store
