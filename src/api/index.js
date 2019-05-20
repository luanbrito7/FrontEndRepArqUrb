import axios from 'axios'

let api = axios.create({
    baseURL: 'http://localhost:4200/api',
    "Content_Type": "application/json"
})

export default api