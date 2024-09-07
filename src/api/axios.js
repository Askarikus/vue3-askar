import axios from 'axios';
// import router from '@/router';
import {getItem} from '@/helpers/persistanceLocalStorage'
const axiosNoAuth = axios.create();
// axios.defaults.baseURL = 'https://askar.ngrok.app';
// axiosNoAuth.defaults.baseURL = 'https://askar.ngrok.app';

axios.defaults.baseURL = 'http://localhost';
axiosNoAuth.defaults.baseURL = 'http://localhost';

// axios.defaults.baseURL = 'https://api.realworld.io/api';
// axiosNoAuth.defaults.baseURL = 'https://api.realworld.io/api';


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
