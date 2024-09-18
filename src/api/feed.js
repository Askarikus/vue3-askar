import axios from '@/api/axios';

const getFeed = async (apiUrl, isLoggedIn) => {
  if(isLoggedIn) {
    return await axios.axios.get(apiUrl);
  } else {
    return await axios.axiosNoAuth.get(apiUrl);
  }

  // if (!apiUrl.includes('/feed')) {
  //   return await axios.axiosNoAuth.get(apiUrl);
  // }
  // return await axios.axios.get(apiUrl);
};

export default {
	getFeed,
};
