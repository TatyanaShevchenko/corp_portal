export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMsgAC = (payload) => {
    return { type: ADD_MESSAGE, payload }
}

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // eslint-disable-next-line
            const newMessage = {
                id: state.messages.length + 1,
                msg: action.payload.message,
            }
            state.messages.push(newMessage)
            return state
        default:
            return state
    }
}
