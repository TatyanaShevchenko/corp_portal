import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { useState } from 'react'

import styles from './index.module.scss'

export const AddMessage = ({ addMessage }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleAddPost = () => {
        addMessage({ message: value })
        setValue('')
    }

    return (
        <div className={styles.add_message}>
            <TextField
                id="outlined-multiline-flexible"
                label="Add message"
                multiline
                fullWidth
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
            />
            <Button onClick={handleAddPost} variant="contained" color="primary">
                Add message
            </Button>
        </div>
    )
}
