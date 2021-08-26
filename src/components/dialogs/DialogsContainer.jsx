import { connect } from 'react-redux'

import { Dialogs } from './index'
import { addMsgAC } from '../../redux/reducers'

const mapStateToProps = (state) => {
    return {
        data: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (msg) => dispatch(addMsgAC(msg)),
    }
}

export const DialogsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dialogs)
