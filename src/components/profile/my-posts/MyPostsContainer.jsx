import { connect } from 'react-redux'

import { MyPosts } from './index'
import { addPostAC } from '../../../redux/reducers'

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            let action = addPostAC(text)
            dispatch(action)
        },
    }
}

export const MyPostsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MyPosts)
