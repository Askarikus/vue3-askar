import axios from '@/api/axios';

const getFeed = async (apiUrl) => {
  if (!apiUrl.includes('/feed')) {
    return await axios.axiosNoAuth.get(apiUrl);
  }
  return await axios.axios.get(apiUrl);
};

export default {
	getFeed,
};
