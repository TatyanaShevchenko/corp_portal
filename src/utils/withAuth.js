import { Redirect } from 'react-router'

export  function withAuth(WrappedComponent) {

    const RedirectComponent = ({isAuth, ...props}) => {
        if (!isAuth) {
            return <Redirect to="/login" />
        }
        return <WrappedComponent  {...props}/>
    }
    return RedirectComponent
}
