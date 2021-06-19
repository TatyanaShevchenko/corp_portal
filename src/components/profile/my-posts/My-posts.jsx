import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Post } from './post'
import styles from './index.module.scss'

export const MyPosts = () => {
    const [value, setValue] = useState('Start typing')

    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className={styles.my_posts}>
            <p className={styles.title}>My posts</p>
            <div className={styles.form}>
                <TextField
                    id="outlined-multiline-flexible"
                    label="Add post"
                    multiline
                    fullWidth
                    rowsMax={4}
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    margin="normal"
                />
                <Button variant="contained" color="primary">
                    Add post
                </Button>
            </div>
            <Post message="Hello" likesCount={5} />
            <Post message="World" likesCount={15} />
        </div>
    )
}
