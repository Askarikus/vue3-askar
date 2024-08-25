import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationType = {
  getArticleStart: '[article] getArticleStart',
  getArticleSuccess: '[article] getArticleSuccess',
  getArticleFailure: '[article] getArticleFailure',
}

const mutations = {
  [mutationType.getArticleStart](state) {
    state.isLoading = true;
    state.error = null;
  },
  [mutationType.getArticleSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationType.getArticleFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
}
export const actionTypes = {
  getArticle: '[article] getArticle',
}

const actions = {
  [actionTypes.getArticle](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationType.getArticleStart, slug)
      articleApi
       .getArticle(slug)
       .then((article) => {
          context.commit(mutationType.getArticleSuccess, article)
          resolve(article)
        })
       .catch((error) => {
          console.log('error in get article' );
          context.commit(mutationType.getArticleFailure, error.response.data.errors)
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
