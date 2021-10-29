import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export const Header = ({userData, userMessages}) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            {userData.id ? (<p className={styles.login}>{userData.login}</p>):(<div className={styles.login}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>)}
        </header>
    )
}
