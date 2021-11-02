import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../redux/reducers/authReducer'

import styles from './index.module.scss'

export const Header = ({ userData, logout }) => {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                {' '}
                <div className={styles.logo}></div>
            </NavLink>
            {userData.id ? (
                <div className={styles.right__content}>
                    <p className={styles.login}>{userData.login}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={logout}
                    >
                        Log Out
                    </Button>
                </div>
            ) : (
                <div className={styles.login}>
                    <NavLink to={'/login'}>Login</NavLink>
                </div>
            )}
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        userData: state.auth.data,
    }
}

export const HeaderContainer = connect(mapStateToProps, {
    logout: auth.logout,
})(Header)
