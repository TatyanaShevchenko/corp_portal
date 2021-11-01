import { connect } from 'react-redux'
import { compose } from 'redux'

import { Dialogs } from './Dialogs.jsx'

import { addMessage } from '../../redux/reducers'
import { withAuth } from '../../utils/withAuth'

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
        isLoading: state.loading.isLoading,
    }
}

export default compose(
    withAuth,
    connect(mapStateToProps, {
        addMessage,
    })
)(Dialogs)
