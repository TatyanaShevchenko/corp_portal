import { Redirect } from 'react-router'

export function withAuth(WrappedComponent, isAuth) {
    const RedirectComponent = () => {
        if (!isAuth) {
            return <Redirect to="/login" />
        }
        return <WrappedComponent />
    }
    return RedirectComponent
}
