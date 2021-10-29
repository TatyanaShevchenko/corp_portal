import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0'

export async function getUsers(page) {
    try {
        const usersFromAPI = await axios.get(`${BASE_URL}/users?page=${page}`)
        return usersFromAPI.data.items
    } catch (error) {
        console.warn(error)
    }
}

export async function getPagesCount() {
    try {
        const usersFromAPI = await axios.get(`${BASE_URL}/users`)
        return Math.ceil(usersFromAPI.data.totalCount / 10)
    } catch (error) {
        console.warn(error)
    }
}

export async function getUserProfile(userId) {
    try {
        const profileFromAPI = await axios.get(`${BASE_URL}/profile/${userId}`)
        return profileFromAPI.data
    } catch (error) {
        console.warn(error)
    }
}

export async function getAuthorisedData() {
    try {
        const authorisationData = await axios.get(`${BASE_URL}/auth/me`, {
            withCredentials: true
        })
        return authorisationData.data
    } catch (error) {
        console.warn(error)
    }
}
