import axios from 'axios';
import {getItem} from '@/helpers/persistanceLocalStorage'

axios.defaults.baseURL = 'https://askar.ngrok.app';
// axios.defaults.baseURL = 'http://localhost';
// axios.defaults.baseURL = 'https://api.realworld.io/api';

axios.interceptors.request.use(config => {
  const token = getItem('accessToken')
  const authorizationToken = token ? `Bearer ${token}` : ''
  config.headers.Authorization = authorizationToken
  return config
})

export default axios;
