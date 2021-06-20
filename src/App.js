import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'
import { Dialogs } from './components/dialogs'

import 'reset-css'
import styles from './App.module.scss'

function App({ store }) {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar data={store._state.navbar} />
                <div className={styles.content}>
                    <Switch>
                        <Route exact path="/dialogs">
                            <Dialogs data={store._state.dialogsPage} />
                        </Route>
                        <Route exact path="/">
                            <Profile
                                data={store._state.profilePage}
                                addPost={store.addPost.bind(store)}
                            />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
