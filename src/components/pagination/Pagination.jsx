import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Pagination } from '@material-ui/lab'

import {
    getAllUsers,
    setPages,
    setCurrentPage,
} from '../../redux/reducers/usersReducer'

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
        pages: state.usersPage.pages,
        currentPage: state.usersPage.currentPage,
    }
}

export const PaginationContainer = connect(mapStateToProps, {
    setCurrentPage,
    getAllUsers,
    setPages,
})(PaginationComponent)
