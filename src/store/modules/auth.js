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
  updateStart: '[auth] updateStart',
  updateSuccess: '[auth] updateSuccess',
  updateFailure: '[auth] updateFailure',
  loginStart: '[auth] loginStart',
  loginSuccess: '[auth] loginSuccess',
  loginFailure: '[auth] loginFailure',
  logoutStart: '[auth] logoutStart',
  logoutSuccess: '[auth] logoutSuccess',
  logoutFailure: '[auth] logoutFailure',
  getCurrentUserStart : '[auth] getCurrentUserStart',
  getCurrentUserSuccess : '[auth] getCurrentUserSuccess',
  getCurrentUserFailure : '[auth] getCurrentUserFailure',
}

const mutations = {
  [mutationType.registerStart](state) {
    state.isSubmitting = true
    state.validationsErrors = null
  },
  [mutationType.registerSuccess](state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.validationsErrors = null
    state.currentUser = payload
  },
  [mutationType.registerFailure](state, payload) {
    state.isSubmitting = false
    state.validationsErrors = payload
  },
  [mutationType.updateStart](state) {
    state.isSubmitting = true
    state.validationsErrors = null
  },
  [mutationType.updateSuccess](state) {
    state.isSubmitting = false
    state.validationsErrors = null
  },
  [mutationType.updateFailure](state, payload) {
    state.isSubmitting = false
    state.validationsErrors = payload
  },
  [mutationType.loginStart](state) {
    state.isSubmitting = true
    state.validationsErrors = null
  },
  [mutationType.loginSuccess](state, payload) {
    state.isSubmitting = false
    state.isLoggedIn = true
    state.currentUser = payload
  },
  [mutationType.loginFailure](state, payload) {
    state.isLoggedIn = false
    state.isSubmitting = false
    state.isLoading = false
    state.validationsErrors = payload
  },
  [mutationType.logoutStart]() {
  },
  [mutationType.logoutSuccess](state) {
    state.isLoggedIn = false
    state.currentUser = null
  },
  [mutationType.logoutFailure]() {
  },
  [mutationType.getCurrentUserStart](state) {
    state.isLoading = true
  },
  [mutationType.getCurrentUserSuccess](state, payload) {
    state.isLoading = false,
    state.currentUser = payload
    state.isLoggedIn = true
  },
  [mutationType.getCurrentUserFailure](state) {
    state.isLoading = false,
    state.isLoggedIn = false,
    state.currentUser = null
  },
}

export const getterTypes = {
  isLoggedIn: '[auth] isLoggedIn',
  isAnonymous: '[auth] isAnonymous',
  currentUser: '[auth] currentUser',
}

const getters = {
  [getterTypes.isLoggedIn]: state => {return Boolean(state.isLoggedIn)},
  [getterTypes.isAnonymous]: state => {return state.isLoggedIn === false},
  [getterTypes.currentUser]: state => {return state.currentUser},
}

export const actionTypes = {
  register: '[auth] register',
  update: '[auth] update',
  login: '[auth] login',
  logout: '[auth] logout',
  getCurrentUser: '[auth] getCurrentUser',
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
  [actionTypes.update](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationType.registerStart)
      authApi
        .update(credentials)
        .then((response) => {
          context.commit(mutationType.updateSuccess, response.data.user)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit(
            mutationType.updateFailure,
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
  [actionTypes.logout](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationType.logoutStart)
      authApi
        .logout(credentials)
        .then(() => {
          context.commit(mutationType.logoutSuccess)
          deleteItem('accessToken')
          resolve()
        })
        .catch((result) => {
          context.commit(mutationType.logoutFailure)
        })
    })
  },
  [actionTypes.getCurrentUser](context) {
    return new Promise((resolve) => {
      context.commit(mutationType.getCurrentUserStart)
      authApi
        .getCurrentUser()
        .then((response) => {
          context.commit(mutationType.getCurrentUserSuccess, response.data.user)
          resolve(response.data.user)
        })
        .catch(() => {
          context.commit(mutationType.getCurrentUserFailure)
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
