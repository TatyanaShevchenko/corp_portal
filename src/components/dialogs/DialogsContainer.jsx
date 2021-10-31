import { connect } from 'react-redux'
import { compose } from 'redux'

import { Dialogs } from './Dialogs.jsx'

import { withAuth } from '../../utils/withAuth'
import { addMessage } from '../../redux/reducers'

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
    }
}

export default compose(
    connect(mapStateToProps, {
        addMessage,
    }),
    withAuth
)(Dialogs)
