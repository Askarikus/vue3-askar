import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceLocalStorage'

const state = {
  isSubmitting: false,
  isLoading: false,
  currentUser: null,
  isLoggedIn: false,
  validationsErrors: null,
}

export const mutationType = {
  registerStart: '[auth] registerStart',
  registerSuccess: '[auth] registerSuccess',
  registerFailure: '[auth] registerFailure',
  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailure: '[auth] loginFailure',
}

const mutations = {
  [mutationType.registerStart](state) {
    state.isSubmitting = true
    state.validationsErrors = null
  },
  [mutationType.registerSuccess](state) {
    ;(state.isSubmitting = false),
      (state.isLoggedIn = true),
      (state.validationsErrors = null)
  },
  [mutationType.registerFailure](state, payload) {
    ;(state.isSubmitting = false), (state.validationsErrors = payload)
  },
  [mutationType.loginStart](state) {
    state.isSubmitting = true
    state.validationsErrors = null
  },
  [mutationType.loginSuccess](state, payload) {
    ;(state.isSubmitting = false),
      (state.isLoggedIn = true),
      (state.currentUser = payload)
  },
  [mutationType.loginFailure](state, payload) {
    ;(state.isLoggedIn = false),
      (state.isSubmitting = false),
      (state.validationsErrors = payload)
  },
}

export const getterTypes = {
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous',
}

const getters = {
  [getterTypes.isLoggedIn]: (state) => {
    return Boolean(state.isLoggedIn)
  },

  [getterTypes.isAnonymous]: (state) => {
    return state.isLoggedIn === false
  },
}

export const actionTypes = {
  register: '[auth] register',
  login: '[auth] login',
}

const actions = {
  [actionTypes.register](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationType.registerStart)
      authApi
        .register(credentials)
        .then((response) => {
          context.commit(mutationType.registerSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit(
            mutationType.registerFailure,
            result.response.data.errors
          )
        })
    })
  },
  [actionTypes.login](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationType.loginStart)
      authApi
        .login(credentials)
        .then((response) => {
          context.commit(mutationType.loginSuccess, response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit(mutationType.loginFailure, result.response.data.errors)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
