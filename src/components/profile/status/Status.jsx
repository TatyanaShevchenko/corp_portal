import { useState } from 'react'
import TextField from '@material-ui/core/TextField'

import styles from './index.module.scss'

export const Status = ({ data }) => {
    const [value, setValue] = useState(data)
    const [editMode, setEditMode] = useState(false)

    const handleClick = () => {
        setEditMode(true)
    }

    const handleBlur = () => {
        setEditMode(false)
    }
    return (
        <div className={styles.status}>
           {!editMode && <p
                role="presentation"
                className={styles.status__text}
                onClick={handleClick}
                onKeyDown={handleClick}
            >
                {value}
            </p>}
            {editMode && (
                <TextField
                    label="Enter your status"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    onBlur={handleBlur}
                />
            )}
        </div>
    )
}
