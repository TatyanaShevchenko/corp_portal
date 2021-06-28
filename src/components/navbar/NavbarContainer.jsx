import { useContext } from 'react'

import { Navbar } from './index'
import StoreContext from '../../StoreContext'

export const NavbarContainer = () => {
    const store = useContext(StoreContext)
    const state = store.getState()

    return <Navbar data={state.navbar} />
}
