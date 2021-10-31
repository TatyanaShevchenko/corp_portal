import { Dialog } from './dialog'
import { Message } from './message'
import { AddMessage } from './add-message'
import styles from './index.module.scss'

export const Dialogs = ({ data, addMessage }) => {
       const { dialogs, messages } = data

    return (
        <div className={styles.dialogs__wrapper}>
            <p className={styles.title}>Dialogs</p>
            <div className={styles.grid}>
                <div className={styles.dialogs}>
                    {!!dialogs.length &&
                        dialogs.map((dialog) => (
                            <Dialog key={dialog.id} {...dialog} />
                        ))}
                </div>
                <div className={styles.messages}>
                    {!!messages.length &&
                        messages.map((message) => (
                            <Message key={message.id} {...message} />
                        ))}
                </div>
            </div>
            <AddMessage addMessage={addMessage} />
        </div>
    )
}
