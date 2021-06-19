import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import styles from './index.module.scss'

export const Navbar = () => {
    return (
        <MenuList className={styles.navbar}>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Dialogs</MenuItem>
        </MenuList>
    )
}
