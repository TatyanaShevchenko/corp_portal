import { useEffect } from 'react'
import { connect } from 'react-redux'

import { Pagination } from '@material-ui/lab'

import { Loader } from '../loader'

import {
    getUsersThunk,
    getPagesCountThunk,
    setCurrentPageAC,
} from '../../redux/reducers/usersReducer'

export const PaginationComponent = ({
    pages,
    currentPage,
    getUsers,
    setPages,
    setCurrentPage,
}) => {
    useEffect(() => {
        setPages()
    }, [])

    const onPageChange = (event, page) => {
        setCurrentPage(page)
        getUsers(page)
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
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (page) => dispatch(getUsersThunk(page)),
        setPages: () => dispatch(getPagesCountThunk()),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    }
}

export const PaginationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaginationComponent)
