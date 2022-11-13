import axios from 'axios'

const petApi = axios.create({
  baseURL: 'http://localhost:4000/api/pet'
})

petApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token') || ''
  }
  return config
})

export default petApi
