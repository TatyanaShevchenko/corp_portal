import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Header } from './components/header'
import { NavbarContainer } from './components/navbar'
import { ProfileContainer } from './components/profile'
import { DialogsContainer } from './components/dialogs'
import { UsersContainer } from './components/users/Users.jsx'

import 'reset-css'
import styles from './App.module.scss'

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <NavbarContainer />
                <div className={styles.content}>
                    <Switch>
                        <Route exact path="/dialogs">
                            <DialogsContainer />
                        </Route>
                        <Route exact path="/users">
                            <UsersContainer />
                        </Route>
                        <Route exact path="/profile/:userId?">
                            <ProfileContainer />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
