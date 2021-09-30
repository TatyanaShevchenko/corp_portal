import { connect } from 'react-redux'

import { Dialogs } from './index'
import { addMsgAC } from '../../redux/reducers'

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addMessage: addMsgAC,
})(Dialogs)
