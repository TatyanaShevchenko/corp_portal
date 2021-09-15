import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { Pagination } from '@material-ui/lab'

import { getUsers, getPagesCount } from '../../api'

import { setUsersAC } from '../../redux/reducers/usersReducer'

export const PaginationComponent = ({ setUsers }) => {
    const [pages, setPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const pagesCount = getPagesCount()
        pagesCount.then((pages) => {
            setPages(pages)
        })
    }, [])

    const onPageChange = (event, page) => {
        setCurrentPage(page)
        const newPageUsers = getUsers(page)
        newPageUsers.then((users) => {
            setUsers(users)
        })
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

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => dispatch(setUsersAC(users)),
    }
}

export const PaginationContainer = connect(
    null,
    mapDispatchToProps
)(PaginationComponent)
