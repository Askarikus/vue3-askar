import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  isSubmitting: false,
  error: null,
}

export const mutationType = {
  createArticleStart: '[article] createArticleStart',
  createArticleSuccess: '[article] createArticleSuccess',
  createArticleFailure: '[article] createArticleFailure',
  getArticleStart: '[article] getArticleStart',
  getArticleSuccess: '[article] getArticleSuccess',
  getArticleFailure: '[article] getArticleFailure',
}

const mutations = {
  [mutationType.createArticleStart](state) {
    state.isSubmitting = true;
    state.error = null;
  },
  [mutationType.createArticleSuccess](state, payload) {
    state.isSubmitting = false;
    state.data = payload;
  },
  [mutationType.createArticleFailure](state, payload) {
    state.isSubmitting = false;
    state.error = payload;
  },
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
  createArticle: '[article] createArticle',
  getArticle: '[article] getArticle',
}

const actions = {
  [actionTypes.createArticle](context, articleData) {
    return new Promise((resolve) => {
      context.commit(mutationType.createArticleStart)
      articleApi
       .createArticle(articleData)
       .then((article) => {
          context.commit(mutationType.createArticleSuccess, article)
          resolve(article)
        })
       .catch((error) => {
          console.log('error in create article' );
          context.commit(mutationType.createArticleFailure, error.response.data.errors)
          // reject(error.response.data.errors)
        })
    })
  },
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
