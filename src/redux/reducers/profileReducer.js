export const ADD_POST = 'ADD_POST'

export const addPostAC = (payload) => {
    return { type: ADD_POST, payload }
}
let initialState = {
    posts: [
        { id: 1, message: 'Hello', likesCount: 10 },
        { id: 2, message: 'World', likesCount: 5 },
        { id: 3, message: 'Ololo', likesCount: 23 },
    ],
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // eslint-disable-next-line
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload.message,
                likesCount: 0,
            }

            return { ...state, posts: [...state.posts, newPost] }
        default:
            return state
    }
}
