import axios from 'axios';
// import router from '@/router';
import {getItem} from '@/helpers/persistanceLocalStorage'
const axiosNoAuth = axios.create();

axios.defaults.baseURL = import.meta.env['VITE_API_URL'];
axiosNoAuth.defaults.baseURL = import.meta.env['VITE_API_URL'];

axios.interceptors.request.use(
config => {
    const token = getItem('accessToken');
    const authorizationToken = token ? `Bearer ${token}` : '';
    config.headers.Authorization = authorizationToken;
    return config;
  });
axios.interceptors.response.use(
  response =>  response, error => {
    const status = error.response.status;
    if (status == 401) {
      // router.push({name: 'login'})
    }
    return Promise.reject(error);
  }
);



export default {axios, axiosNoAuth};
