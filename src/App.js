import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'
import { DialogsContainer } from './components/dialogs'

import 'reset-css'
import styles from './App.module.scss'

function App({ store }) {
    const state = store.getState()
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar data={state.navbar} />
                <div className={styles.content}>
                    <Switch>
                        <Route exact path="/dialogs">
                            <DialogsContainer store={store} />
                        </Route>
                        <Route exact path="/">
                            <Profile store={store} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
