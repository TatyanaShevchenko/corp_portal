import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { ProfileContainer } from '../profile'
import DialogsContainer from '../dialogs/DialogsContainer.jsx'
import { UsersContainer } from '../users/Users.jsx'
import { Login } from '../login'

export const MainContent = ({ isAuth }) => {

    return (
        <Switch>
            <Route exact path="/dialogs">
                <DialogsContainer isAuth={isAuth}/>
            </Route>
            <Route exact path="/users">
                <UsersContainer />
            </Route>
            <Route path="/profile/:userId?">
                <ProfileContainer isAuth={isAuth}/>
            </Route>
            <Route exact path="/">
                <ProfileContainer isAuth={isAuth}/>
            </Route>
            <Route path="/login">
                <Login isAuth={isAuth} />
            </Route>
        </Switch>
    )
}