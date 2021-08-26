export const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMsgAC = (payload) => {
    return { type: ADD_MESSAGE, payload }
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Viktor' },
        { id: 3, name: 'Tatyana' },
    ],

    messages: [
        { id: 1, msg: 'Hi' },
        { id: 2, msg: 'Bla bla bla' },
        { id: 3, msg: 'Hellloooo' },
    ],
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            // eslint-disable-next-line
            const newMessage = {
                id: state.messages.length + 1,
                msg: action.payload.message,
            }

            return { ...state, messages: [...state.messages, newMessage] }
        default:
            return state
    }
}
