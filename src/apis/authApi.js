import axios from 'axios'

const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL
})

authApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token') || ''
  }
  return config
})

export default authApi
