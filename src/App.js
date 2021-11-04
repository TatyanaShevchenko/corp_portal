import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { HeaderContainer } from './components/header'
import { Navbar } from './components/navbar'
import { MainContent } from './components/main-content'
import { Loader } from './components/loader'

import { auth, selectIsAuth } from './redux/reducers/authReducer'
import {selectIsLoading} from './redux/reducers/loadingReducer'
 
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
                <Navbar/>
                <div className={styles.content}>
                {isLoading && <Loader />}
                    <MainContent isAuth={isAuth} />
                </div>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: selectIsLoading(state),
        isAuth: selectIsAuth(state)
    }
}

export const AppContainer = connect(mapStateToProps, {
    getAuthorisedInfo: auth.getAuthorisedInfo,
})(App)
