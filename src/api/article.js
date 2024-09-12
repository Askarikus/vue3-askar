import axios from '@/api/axios';

const getArticle = async (slug) => {
  const response = await axios.axios.get(`/articles/${slug}`)
  return response.data.article
}

const favoriteArticle = async (slug) => {
  const response = await axios.axios.post(`/articles/${slug}/favorite`)
  return response.data.article
}

const unfavoriteArticle = async (slug) => {
  const response = await axios.axios.delete(`/articles/${slug}/unfavorite`)
  return response.data.article
}

export default {
	getArticle,
  favoriteArticle,
  unfavoriteArticle,
};
