import articleApi from '@/api/article'

const state = {
  isFavoriting: false,
  error: null,
}

export const mutationType = {
  favoriteArticleStart: '[articleAddToFavorites] favoriteArticleStart',
  favoriteArticleSuccess: '[articleAddToFavorites] favoriteArticleSuccess',
  favoriteArticleFailure: '[articleAddToFavorites] favoriteArticleFailure',
}

const mutations = {
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

}
export const actionTypes = {
  favoriteArticle: '[article] favoriteArticle',
}

const actions = {
  [actionTypes.favoriteArticle](context, {slug, isFavorited}) {
    return new Promise((resolve) => {
      context.commit(mutationType.favoriteArticleStart, slug)
      const promise = isFavorited ? articleApi.unfavoriteArticle(slug) : articleApi.favoriteArticle(slug)

      promise.then((article) => {
        context.commit(mutationType.favoriteArticleSuccess, article)
        resolve(article)
      }
    ).catch(() => {
      console.log('error in favorite article' );
      context.commit(mutationType.favoriteArticleFailure, error.response.data.errors)
    })

    })
  },
}

export default {
  state,
  mutations,
  actions,
}
