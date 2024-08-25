import feedApi from '@/api/feed'

const state = {
  data: null,
  isLoading: false,
  error: null,
}
export const mutationType = {
  getFeedStart : '[feed] getFeedStart',
  getFeedSuccess : '[feed] getFeedSuccess',
  getFeedFailure : '[feed] getFeedFailure',
}

const mutations = {
  [mutationType.getFeedStart](state) {
    state.isLoading = true,
    state.data = null
  },
  [mutationType.getFeedSuccess](state, payload) {
    state.isLoading = false,
    state.data = payload
  },
  [mutationType.getFeedFailure](state) {
    state.isLoading = false,
    state.data = null
    // state.error = true,
  },
}

export const actionTypes = {
  getFeed: '[feed] getFeed',
}

const actions = {
  [actionTypes.getFeed](context, {apiUrl}) {
    return new Promise((resolve) => {
      context.commit(mutationType.getFeedStart)
      feedApi
        .getFeed(apiUrl)
        .then((response) => {
          context.commit(mutationType.getFeedSuccess, response.data)
          resolve(response.data)
        })
        .catch(() => {
          context.commit(mutationType.getFeedFailure)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
