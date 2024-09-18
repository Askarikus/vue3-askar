import profileApi from '@/api/profile'

const state = {
  userProfile: null,
  isLoading: false,
  validationsErrors: null,
}

export const mutationType = {
  getUserProfileStart: '[profile] getUserProfileStart',
  getUserProfileSuccess: '[profile] getUserProfileSuccess',
  getUserProfileFailure: '[profile] getUserProfileFailure',
  followUserStart: '[profile] followUserStart',
  followUserSuccess: '[profile] followUserSuccess',
  followUserFailure: '[profile] followUserFailure',
  unfollowUserStart: '[profile] unfollowUserStart',
  unfollowUserSuccess: '[profile] unfollowUserSuccess',
  unfollowUserFailure: '[profile] unfollowUserFailure',
}

const mutations = {
  [mutationType.getUserProfileStart](state) {
    state.isLoading = true
    state.validationsErrors = null
  },
  [mutationType.getUserProfileSuccess](state, payload) {
    state.isLoading = false
    state.validationsErrors = null
    state.userProfile = payload
  },
  [mutationType.getUserProfileFailure](state, payload) {
    state.isLoading = false
    state.validationsErrors = payload
  },
  [mutationType.followUserStart](state) {
    state.isLoading = true
    state.validationsErrors = null
  },
  [mutationType.followUserSuccess](state, payload) {
    state.isLoading = false
    state.userProfile = payload
    state.validationsErrors = null
  },
  [mutationType.followUserFailure](state, payload) {
    state.isLoading = false
    state.validationsErrors = payload
  },
  [mutationType.unfollowUserStart](state) {
    state.isLoading = true
    state.validationsErrors = null
  },
  [mutationType.unfollowUserSuccess](state, payload) {
    state.isLoading = false
    state.userProfile = payload
    state.validationsErrors = null
    state.validationsErrors = null
  },
  [mutationType.unfollowUserFailure](state, payload) {
    state.isLoading = false
    state.validationsErrors = payload
  },
}

export const actionTypes = {
  getUserProfile: '[profile] getUserProfile',
  followUser: '[profile] followUser',
  unfollowUser: '[profile] unfollowUser',
}

const actions = {
  [actionTypes.getUserProfile](context, {username}) {
    return new Promise((resolve) => {
      context.commit(mutationType.getUserProfileStart)
      profileApi
        .getUserProfile(username)
        .then((response) => {
          context.commit(
            mutationType.getUserProfileSuccess,
            response.data.profile
          )
          resolve(response.data.profile)
        })
        .catch((response) => {
          console.log('error in get user profile')
          context.commit(
            mutationType.getUserProfileFailure,
            response.data.errors
          )
        })
    })
  },
  [actionTypes.followUser](context, {username}) {
    return new Promise((resolve) => {
      context.commit(mutationType.followUserStart)
      profileApi
        .followUser(username)
        .then((response) => {
          context.commit(mutationType.followUserSuccess, response.data.profile)
          resolve(response.data.profile)
        })
        .catch((response) => {
          console.log('error in follow user')
          context.commit(mutationType.followUserFailure, response.data.errors)
        })
    })
  },
  [actionTypes.unfollowUser](context, {username}) {
    return new Promise((resolve) => {
      context.commit(mutationType.unfollowUserStart)
      profileApi
        .unfollowUser(username)
        .then((response) => {
          context.commit(
            mutationType.unfollowUserSuccess,
            response.data.profile
          )
          resolve(response.data.profile)
        })
        .catch((response) => {
          console.log('error in unfollow user')
          context.commit(mutationType.unfollowUserFailure, response.data.errors)
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
}
