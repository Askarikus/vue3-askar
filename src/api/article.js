import axios from '@/api/axios';

const getArticle = async (slug) => {
  const response = await axios.get(`/articles/${slug}`)
  return response.data.article
}

export default {
	getArticle,
};
