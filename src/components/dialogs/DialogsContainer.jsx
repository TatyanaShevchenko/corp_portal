import { Dialogs } from './index'
import { addMsgAC } from '../../redux/reducers'

export const DialogsContainer = ({ store }) => {
    const data = store.getState().dialogsPage

    const addMessage = (msg) => {
        store.dispatch(addMsgAC(msg))
    }

    return <Dialogs data={data} addMessage={addMessage} />
}
