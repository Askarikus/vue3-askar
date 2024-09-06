import tagApi from '@/api/tag'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationType = {
  getPopularTagsStart: '[tag] getPopularTagsStart',
  getPopularTagsSuccess: '[tag] getPopularTagsSuccess',
  getPopularTagsFailure: '[tag] getPopularTagsFailure',
}

const mutations = {
  [mutationType.getPopularTagsStart](state) {
    state.isLoading = true;
    state.error = null;
  },
  [mutationType.getPopularTagsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationType.getPopularTagsFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
}
export const actionTypes = {
  getPopularTags: '[tag] getPopularTags',
}

const actions = {
  [actionTypes.getPopularTags](context) {
    return new Promise((resolve) => {
      context.commit(mutationType.getPopularTagsStart)
      tagApi
       .getPopularTags()
       .then((tags) => {
          context.commit(mutationType.getPopularTagsSuccess, tags)
          resolve(tags)
        })
       .catch((error) => {
          console.log('error in get popular tags' );
          context.commit(mutationType.getPopularTagsFailure, error.response.data.errors)
          // reject(error.response.data.errors)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
