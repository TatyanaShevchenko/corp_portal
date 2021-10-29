import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import styles from './index.module.scss'
import { Friends } from './friends'

export const Navbar = ({ data }) => {
    const { friends } = data
    const [anchorEl, setAnchorEl] = useState(null)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index)
        setAnchorEl(null)
    }

    const options = [
        { name: 'profile', link: '/profile', exact: false },
        { name: 'dialogs', link: '/dialogs', exact: true },
        { name: 'users', link: '/users', exact: true },
    ]

    return (
        <div className={styles.navbar}>
            <MenuList>
                {options.map((option, index) => (
                    <MenuItem
                        key={option.name}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        <NavLink
                            exact={option.exact}
                            to={option.link}
                            className={styles.navbar__link}
                        >
                            {option.name}
                        </NavLink>
                    </MenuItem>
                ))}
            </MenuList>
            <Friends friends={friends} />
        </div>
    )
}
