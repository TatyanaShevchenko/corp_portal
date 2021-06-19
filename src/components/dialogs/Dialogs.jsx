import { NavLink } from 'react-router-dom'

import styles from './index.module.scss'

export const Dialogs = () => {
    const dialogs = [
        { id: '1', name: 'Alex' },
        { id: '2', name: 'Viktor' },
        { id: '3', name: 'Tatyana' },
    ]

    const messages = [
        { id: '1', msg: 'Hi' },
        { id: '2', msg: 'Bla bla bla' },
        { id: '3', msg: 'Hellloooo' },
    ]

    return (
        <div className={styles.dialogs}>
            <p className={styles.title}>Dialogs</p>
            <div className={styles.grid}>
                <div className={styles.persons}>
                    {dialogs.map((dialog) => (
                        <Dialog key={dialog.id} {...dialog} />
                    ))}
                </div>
                <div className={styles.messages}>
                    {messages.map((message) => (
                        <Message key={message.id} {...message} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const Dialog = ({ id, name }) => {
    return (
        <div className={styles.person}>
            <NavLink exact to={`/dialogs/${id}`} className={styles.person}>
                {name}
            </NavLink>
        </div>
    )
}

const Message = ({ msg }) => {
    return <div className={styles.message}>{msg}</div>
}
