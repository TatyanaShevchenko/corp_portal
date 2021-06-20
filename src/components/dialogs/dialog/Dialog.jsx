import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

export const Dialog = ({ id, name }) => {
    return (
        <div className={styles.dialog}>
            <NavLink exact to={`/dialogs/${id}`} className={styles.dialog}>
                {name}
            </NavLink>
        </div>
    )
}
