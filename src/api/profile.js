import axios from '@/api/axios';

const getUserProfile = (username) => {
  return axios.axios.get(`/profiles/${username}`)
}

const followUser = (username) => {
  return axios.axios.post(`/profiles/${username}/follow`)
}
const unfollowUser = (username) => {
  return axios.axios.post(`/profiles/${username}/unfollow`)
}

export default {
  getUserProfile,
  followUser,
  unfollowUser
}
