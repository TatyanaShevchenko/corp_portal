import { Redirect } from 'react-router'
import { useParams } from 'react-router-dom'

export function withAuth(WrappedComponent) {
    const RedirectComponent = ({ isAuth, ...props }) => {
        const { userId } = useParams()
        if (isAuth || userId) {
            return <WrappedComponent {...props} />
        }
        return <Redirect to="/login" />
    }
    return RedirectComponent
}
