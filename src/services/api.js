const axios = require('axios')
const customAxios = axios.create({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
    },
    baseURL: 'http://localhost:8080/'
})
export default customAxios;
