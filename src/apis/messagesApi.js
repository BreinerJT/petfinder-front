import axios from 'axios'

const messagesApi = axios.create({
  baseURL: import.meta.env.VITE_MSG_API_URL
})

messagesApi.interceptors.request.use(config => {
  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token') || ''
  }
  return config
})

export default messagesApi
