import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Header } from './components/header'
import { NavbarContainer } from './components/navbar'
import { ProfileContainer } from './components/profile'
import { DialogsContainer } from './components/dialogs'
import { UsersContainer } from './components/users/Users.jsx'

import {auth} from './redux/reducers/authReducer'

import 'reset-css'
import styles from './App.module.scss'

function App({userData,userMessages, getAuthorisedInfo }) {

    useEffect(() => {
        getAuthorisedInfo()
    }, [])

    return (
        <Router>
            <div className={styles.app}>
                <Header userData={userData} userMessages={userMessages}/>
                <NavbarContainer />
                <div className={styles.content}>
                    <Switch>
                        <Route exact path="/dialogs">
                            <DialogsContainer />
                        </Route>
                        <Route exact path="/users">
                            <UsersContainer />
                        </Route>
                        <Route path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>
                        <Route exact path="/">
                            <ProfileContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
        userMessages: state.auth.messages,
        isLoading: state.loading.isLoading,
    }
}

export const AppContainer = connect(mapStateToProps, { getAuthorisedInfo:auth.getAuthorisedInfo })(App)