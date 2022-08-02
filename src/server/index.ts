import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3333'
})

export const getApiList = () => service.get('/api/list').then(res => res.data)