export const ADD_POST = 'ADD_POST'

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            // eslint-disable-next-line
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload.message,
                likesCount: 0,
            }
            state.posts.push(newPost)
            return state
        default:
            return state
    }
}
