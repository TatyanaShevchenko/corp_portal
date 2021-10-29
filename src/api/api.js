import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {  "API-KEY":"32722a3d-dcdc-46bf-8a11-c6aeddca672c"},
    withCredentials: true,
  });

export async function getUsers(page = 1) {
    try {
        const usersFromAPI = await instance.get(`/users?page=${page}`,
       )
        return usersFromAPI.data.items
    } catch (error) {
        console.warn(error)
    }
}

export async function getPagesCount() {
    try {
        const usersFromAPI = await instance.get(`/users`)
        return Math.ceil(usersFromAPI.data.totalCount / 10)
    } catch (error) {
        console.warn(error)
    }
}

export async function getUserProfile(userId) {
    try {
        const profileFromAPI = await instance.get(`/profile/${userId}`)
        return profileFromAPI.data
    } catch (error) {
        console.warn(error)
    }
}

export async function getAuthorisedData() {
    try {
        const authorisationData = await instance.get(`/auth/me`, {
            withCredentials: true
        })
        return authorisationData.data
    } catch (error) {
        console.warn(error)
    }
}

export async function followUser(userId) {
    try {
        const res = await instance.post(`/follow/${userId}`)
        return res
    } catch (error) {
        console.warn(error)
    }
}

export async function unfollowUser(userId) {
    try {
        const res = await instance.delete(`/follow/${userId}`)
        return res.data
    } catch (error) {
        console.warn(error)
    }
}