import axios from '@/api/axios';

const getFeed = async (apiUrl) => {
  return await axios.get(apiUrl);
};

export default {
	getFeed,
};
