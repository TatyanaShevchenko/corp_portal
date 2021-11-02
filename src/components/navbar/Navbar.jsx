import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'

import styles from './index.module.scss'
import { FriendsContainer } from './friends/Friends.jsx'

export const Navbar = ({ data }) => {
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
                    <NavLink
                        key={option.name}
                        exact={option.exact}
                        to={option.link}
                        className={styles.navbar__link}
                    >
                        <MenuItem
                            selected={index === selectedIndex}
                            onClick={(event) =>
                                handleMenuItemClick(event, index)
                            }
                        >
                            {option.name}
                        </MenuItem>
                    </NavLink>
                ))}
            </MenuList>
            <FriendsContainer />
        </div>
    )
}
