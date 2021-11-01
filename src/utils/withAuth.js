import { Redirect } from 'react-router'

export function withAuth(WrappedComponent) {

    const RedirectComponent = ({isAuth, ...props}) => {
        if (isAuth) {
            return <WrappedComponent  {...props}/>
        }
        return <Redirect to="/login" />
    }
    return RedirectComponent
}
