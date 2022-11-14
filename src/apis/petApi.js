import axios from 'axios'

const petApi = axios.create({
  baseURL: import.meta.env.VITE_PET_API_URL
})

petApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token') || ''
  }
  return config
})

export default petApi
