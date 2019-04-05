import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://route-api.local/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})