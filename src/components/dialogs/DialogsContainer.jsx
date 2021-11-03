import { connect } from 'react-redux'
import { compose } from 'redux'

import { Dialogs } from './Dialogs.jsx'

import { addMessage } from '../../redux/reducers'
import {selectDialogsData } from '../../redux/reducers/dialogsReducer'
import { withAuth } from '../../utils/withAuth'

const mapStateToProps = (state) => {
    return {
        data: selectDialogsData(state)
    }
}

export default compose(
    withAuth,
    connect(mapStateToProps, {
        addMessage,
    })
)(Dialogs)
