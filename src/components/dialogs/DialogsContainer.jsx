import { useContext } from 'react'

import { Dialogs } from './index'
import StoreContext from '../../StoreContext'
import { addMsgAC } from '../../redux/reducers'

export const DialogsContainer = () => {
    const store = useContext(StoreContext)
    const data = store.getState().dialogsPage

    const addMessage = (msg) => {
        store.dispatch(addMsgAC(msg))
    }

    return <Dialogs data={data} addMessage={addMessage} />
}
