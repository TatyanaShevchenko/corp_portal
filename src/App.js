import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'
import { Dialogs } from './components/dialogs'

import 'reset-css'
import styles from './App.module.scss'

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Header />
                <Navbar />
                <div className={styles.content}>
                    <Switch>
                        <Route exact path="/dialogs">
                            <Dialogs />
                        </Route>
                        <Route exact path="/">
                            <Profile />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
