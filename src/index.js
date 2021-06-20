import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './index.css'

const posts = [
    { id: '1', message: 'Hello', likesCount: 10 },
    { id: '2', message: 'World', likesCount: 5 },
    { id: '3', message: 'Ololo', likesCount: 23 },
]

const dialogs = [
    { id: '1', name: 'Alex' },
    { id: '2', name: 'Viktor' },
    { id: '3', name: 'Tatyana' },
]

const messages = [
    { id: '1', msg: 'Hi' },
    { id: '2', msg: 'Bla bla bla' },
    { id: '3', msg: 'Hellloooo' },
]

Sentry.init({
    dsn: 'https://b6674e350d6743e7b32371381fa9c83a@o873217.ingest.sentry.io/5824864',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
})

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
