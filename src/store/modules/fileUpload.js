import fileUploadApi from "@/api/fileUpload";


const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationType = {
  fileUploadStart: '[fileUpload] fileUploadStart',
  fileUploadSuccess: '[fileUpload] fileUploadSuccess',
  fileUploadFailure: '[fileUpload] fileUploadFailure',
}

const mutations = {
  [mutationType.fileUploadStart](state) {
    state.isLoading = true;
    state.error = null;
  },
  [mutationType.fileUploadSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationType.fileUploadFailure](state, payload) {
    state.isLoading = false;
    state.error = payload;
  },
}

export const actionTypes = {
  fileUpload: '[fileUpload] fileUpload',
}

const actions = {
  [actionTypes.fileUpload](context, formData) {
    return new Promise((resolve) => {
      context.commit(mutationType.fileUploadStart)
      fileUploadApi
       .uploadFile(formData)
       .then((response) => {
          context.commit(mutationType.fileUploadSuccess, formData)
          resolve(response.data.file)
        })
       .catch((error) => {
          console.log('error in file upload' );
          context.commit(mutationType.fileUploadFailure, error.response.data.errors)
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
