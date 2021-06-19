import { Header } from './components/header'
import { Navbar } from './components/navbar'
import { Profile } from './components/profile'

import 'reset-css'
import './App.css'

function App() {
    return (
        <div className="app__wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    )
}

export default App
