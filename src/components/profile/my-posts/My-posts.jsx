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

    const posts = [
        { id: '1', message: 'Hello', likesCount: 10 },
        { id: '2', message: 'World', likesCount: 5 },
        { id: '3', message: 'Ololo', likesCount: 23 },
    ]

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
            {posts.map((post) => (
                <Post key={post.id} {...post} />
            ))}
        </div>
    )
}
