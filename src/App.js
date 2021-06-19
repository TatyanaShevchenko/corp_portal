import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'
import { Dialogs } from './components/dialogs'

import 'reset-css'
import styles from './App.module.scss'

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <Navbar />
            <div className={styles.content}>
                <Profile />
                <Dialogs />
            </div>
        </div>
    )
}

export default App
