const ADD_POST = 'ADD_POST'

export const store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello', likesCount: 10 },
                { id: 2, message: 'World', likesCount: 5 },
                { id: 3, message: 'Ololo', likesCount: 23 },
            ],
        },
        dialogsPage: {
            dialogs: [
                { id: '1', name: 'Alex' },
                { id: '2', name: 'Viktor' },
                { id: '3', name: 'Tatyana' },
            ],

            messages: [
                { id: '1', msg: 'Hi' },
                { id: '2', msg: 'Bla bla bla' },
                { id: '3', msg: 'Hellloooo' },
            ],
        },
        navbar: {
            friends: [
                {
                    id: '1',
                    name: 'Alex',
                    image: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png',
                },
                {
                    id: '2',
                    name: 'Viktor',
                    image: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png',
                },
                {
                    id: '3',
                    name: 'Tatyana',
                    image: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png',
                },
                {
                    id: '4',
                    name: 'Mary',
                    image: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png',
                },
            ],
        },
    },
    _callSubscriber() {
        console.log('Rerender')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                // eslint-disable-next-line
                const newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    message: action.payload.message,
                    likesCount: 0,
                }
                this._state.profilePage.posts.push(newPost)
                this._callSubscriber()
                break
        }
    },
}

export const addPostAC = (payload) => {
    return { type: ADD_POST, payload }
}
