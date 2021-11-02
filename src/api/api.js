import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: { 'API-KEY': '32722a3d-dcdc-46bf-8a11-c6aeddca672c' },
    withCredentials: true,
})

export async function getPagesCount() {
    try {
        const usersFromAPI = await instance.get(`/users`)
        return Math.ceil(usersFromAPI.data.totalCount / 10)
    } catch (error) {
        console.warn(error)
    }
}

export const usersAPI = {
    async getUsers(page = 1) {
        try {
            const usersFromAPI = await instance.get(`/users?page=${page}`)
            return usersFromAPI.data.items
        } catch (error) {
            console.warn(error)
        }
    },

    async getFriends() {
        try {
            const friendsFromAPI = await instance.get(`/users?friend=true`)
            return friendsFromAPI.data.items
        } catch (error) {
            console.warn(error)
        }
    },
    async followUser(userId) {
        try {
            const res = await instance.post(`/follow/${userId}`)
            return res
        } catch (error) {
            console.warn(error)
        }
    },

    async unfollowUser(userId) {
        try {
            const res = await instance.delete(`/follow/${userId}`)
            return res.data
        } catch (error) {
            console.warn(error)
        }
    },
}

export const profileAPI = {
    async getProfile(userID) {
        try {
            const profileFromAPI = await instance.get(`/profile/${userID}`)
            return profileFromAPI.data
        } catch (error) {
            console.warn(error)
        }
    },
    async getStatus(userID) {
        try {
            const userStatus = await instance.get(`/profile/status/${userID}`)
            return userStatus.data
        } catch (error) {
            console.warn(error)
        }
    },
    async setMyStatus(status) {
        try {
            const res = await instance.put(`/profile/status/`, { status })
            return res
        } catch (error) {
            console.warn(error)
        }
    },
}

export const authAPI = {
    async getAuthorisedData() {
        try {
            const authorisationData = await instance.get(`/auth/me`)
            return authorisationData.data
        } catch (error) {
            console.warn(error)
        }
    },

    async login (email,password,rememberMe = false, captcha = "" ) {
        try {
            const res = await instance.post(`/auth/login`, { email,password,rememberMe, captcha})
            return res.data
        }catch (error) {
            console.warn(error)
        }
    },
    async logout() {
        try {
            const res = await instance.delete(`/auth/login`)
            return res.data
        }catch (error) {
            console.warn(error)
        }
    }
}
