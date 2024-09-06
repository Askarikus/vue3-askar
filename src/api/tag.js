import axios from '@/api/axios';

const getPopularTags = async (slug) => {
  const response = await axios.axiosNoAuth.get(`/tags`)
  return response.data.tags
}

export default {
	getPopularTags,
};
