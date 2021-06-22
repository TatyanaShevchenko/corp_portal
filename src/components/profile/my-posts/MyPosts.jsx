import { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { Post } from './post'
import styles from './index.module.scss'
import { addPostAC } from '../../../redux/state'

export const MyPosts = ({ posts, dispatch }) => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleAddPost = () => {
        dispatch(addPostAC({ message: value }))
        setValue('')
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
                <Button
                    onClick={handleAddPost}
                    variant="contained"
                    color="secondary"
                >
                    Add post
                </Button>
            </div>
            {!!posts.length &&
                posts.map((post) => <Post key={post.id} {...post} />)}
        </div>
    )
}
