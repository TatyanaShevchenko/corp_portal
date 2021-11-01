import { Redirect } from 'react-router'

import styles from './index.module.scss'

export const Login = ({isAuth}) => {
  if (isAuth) {
    return <Redirect to="/" />
}
    return (
        <div className={styles.login}>
          Login
        </div>
    )
}
