import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Pagination } from '@material-ui/lab'

import { users, selectPages, selectCurrentPage } from '../../redux/reducers/usersReducer'

export const PaginationComponent = ({
    pages,
    currentPage,
    getAllUsers,
    setPages,
    setCurrentPage,
}) => {
    useEffect(() => {
        setPages()
    }, [])

    const onPageChange = (event, page) => {
        setCurrentPage(page)
        getAllUsers(page)
    }

    return (
        <Pagination
            onChange={onPageChange}
            page={currentPage}
            count={pages}
            color="primary"
            size="large"
        />
    )
}
const mapStateToProps = (state) => {
    return {
        pages: selectPages(state),
        currentPage: selectCurrentPage(state)
    }
}

export const PaginationContainer = connect(mapStateToProps, {
    setCurrentPage: users.setCurrentPage,
    getAllUsers: users.getAllUsers,
    setPages: users.setPages,
})(PaginationComponent)
