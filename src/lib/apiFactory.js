import axios from 'axios'

export function createApi({ baseURL, getToken }) {
  const instance = axios.create({ baseURL })
  instance.interceptors.request.use(config => {
    const token = typeof getToken === 'function' ? getToken() : localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  })
  return instance
}
