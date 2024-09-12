import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  isFavoriting: false,
  isUnfavoriting: false,
  error: null,
}

export const mutationType = {
  getArticleStart: '[article] getArticleStart',
  getArticleSuccess: '[article] getArticleSuccess',
  getArticleFailure: '[article] getArticleFailure',
  favoriteArticleStart: '[article] favoriteArticleStart',
  favoriteArticleSuccess: '[article] favoriteArticleSuccess',
  favoriteArticleFailure: '[article] favoriteArticleFailure',
  unfavoriteArticleStart: '[article] unfavoriteArticleStart',
  unfavoriteArticleSuccess: '[article] unfavoriteArticleSuccess',
  unfavoriteArticleFailure: '[article] unfavoriteArticleFailure',
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
  [mutationType.favoriteArticleStart](state) {
    state.isFavoriting = true;
    state.error = null;
  },
  [mutationType.favoriteArticleSuccess](state, payload) {
    state.isFavoriting = false;
    state.data = payload;
  },
  [mutationType.favoriteArticleFailure](state, payload) {
    state.isFavoriting = false;
    state.error = payload;
  },
  [mutationType.unfavoriteArticleStart](state) {
    state.isUnfavoriting = true;
    state.error = null;
  },
  [mutationType.unfavoriteArticleSuccess](state, payload) {
    state.isUnfavoriting = false;
    state.data = payload;
  },
  [mutationType.unfavoriteArticleFailure](state, payload) {
    state.isUnfavoriting = false;
    state.error = payload;
  },
}
export const actionTypes = {
  getArticle: '[article] getArticle',
  favoriteArticle: '[article] favoriteArticle',
  unfavoriteArticle: '[article] unfavoriteArticle',
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
  [actionTypes.favoriteArticle](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationType.favoriteArticleStart, slug)
      articleApi
       .favoriteArticle(slug)
       .then((article) => {
          context.commit(mutationType.favoriteArticleSuccess, article)
          resolve(article)
        })
       .catch((error) => {
          console.log('error in favorite article' );
          context.commit(mutationType.favoriteArticleFailure, error.response.data.errors)
          // reject(error.response.data.errors)
        })
    })
  },
  [actionTypes.unfavoriteArticle](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationType.unfavoriteArticleStart, slug)
      articleApi
       .unfavoriteArticle(slug)
       .then((article) => {
          context.commit(mutationType.unfavoriteArticleSuccess, article)
          resolve(article)
        })
       .catch((error) => {
          console.log('error in unfavorite article' );
          context.commit(mutationType.unfavoriteArticleFailure, error.response.data.errors)
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
