import { connect } from 'react-redux'

import { MyPosts } from './index'
import { addPost } from '../../../redux/reducers'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts)
