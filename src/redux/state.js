let rerenderEntireTree = () => {
    console.log('Rerender')
}

export const state = {
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
}

export const addPost = (message) => {
    const newPost = {
        id: state.profilePage.posts.length + 1,
        message,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}
