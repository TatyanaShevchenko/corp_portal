import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Header } from './components/header'
import { NavbarContainer } from './components/navbar'
import { MainContent } from './components/main-content'

import { auth } from './redux/reducers/authReducer'

import 'reset-css'
import styles from './App.module.scss'

function App({ userData, userMessages, isAuth, getAuthorisedInfo }) {
    useEffect(() => {
        async function fetchData() {
            await getAuthorisedInfo()
        }
        fetchData()
    }, [])

    return (
        <div className={styles.app}>
        <Router>
                <Header userData={userData} />
                <NavbarContainer />
                <div className={styles.content}>
                 <MainContent isAuth={isAuth} />
                </div>
          
        </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
        userMessages: state.auth.messages,
        isAuth: state.auth.isAuth,
    }
}

export const AppContainer = connect(mapStateToProps, {
    getAuthorisedInfo: auth.getAuthorisedInfo,
})(App)
