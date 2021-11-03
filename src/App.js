import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Loader } from './components/loader'
import { HeaderContainer } from './components/header'
import { NavbarContainer } from './components/navbar'
import { MainContent } from './components/main-content'

import { auth } from './redux/reducers/authReducer'

import 'reset-css'
import styles from './App.module.scss'

function App({ isAuth, isLoading, getAuthorisedInfo }) {
    useEffect(() => {
        async function fetchData() {
            await getAuthorisedInfo()
        }
        fetchData()
    }, [isAuth])

    return (
        <div className={styles.app}>
            <Router>
                <HeaderContainer />
                <NavbarContainer />
                <div className={styles.content}>
                    {isLoading && <Loader />}
                    {!isLoading && <MainContent isAuth={isAuth} />}
                </div>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.loading.isLoading,
        isAuth: state.auth.isAuth,
    }
}

export const AppContainer = connect(mapStateToProps, {
    getAuthorisedInfo: auth.getAuthorisedInfo,
})(App)
