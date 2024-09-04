import axios from '@/api/axios';

const register = (credentials) => {
	return axios.axiosNoAuth.post('/users', { user: credentials });
};

const update = (credentials) => {
	return axios.axios.put('/user', { user: credentials });
};

const login = (credentials) => {
	return axios.axiosNoAuth.post('/users/login', { user: credentials });
};

const getCurrentUser = () => {
  return axios.axios.get('/user')
}

export default {
	register,
	login,
  update,
  getCurrentUser,
};
