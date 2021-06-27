import { MyPosts } from './index'
import { addPostAC } from '../../../redux/reducers'

export const MyPostsContainer = ({ store }) => {
    const posts = store.getState().profilePage.posts

    const addPost = (text) => {
        let action = addPostAC(text)
        store.dispatch(action)
    }

    return <MyPosts posts={posts} addPost={addPost} />
}
