import { connect } from 'react-redux'

import { Navbar } from './index'

const mapStateToProps = (state) => {
    return {
        data: state.navbar,
    }
}
export const NavbarContainer = connect(mapStateToProps)(Navbar)
