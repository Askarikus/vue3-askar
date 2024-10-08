<template>
  <div v-if="currentUser" class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>
        <Mvc-validation-errors
          v-if="validationsErrors"
          :validationsErrors="validationsErrors"
        />
        <form @submit.prevent="onSubmit">
          <fieldset>
            <fieldset class="form-group">
              <input
                aria-label="Avatar picture url"
                class="form-control"
                placeholder="URL of profile picture"
                type="file"
                @change="onSubmitImage($event.target.files)"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                aria-label="Username"
                type="text"
                class="form-control form-control-lg"
                placeholder="Your name"
                v-model="username"
              />
            </fieldset>
            <fieldset class="form-group">
              <textarea
                aria-label="Bio"
                class="form-control form-control-lg"
                rows="8"
                placeholder="Short bio about you"
                v-model="bio"
              ></textarea>
            </fieldset>
            <fieldset class="form-group">
              <input
                aria-label="Email"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
                v-model="email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                aria-label="New password"
                type="password"
                class="form-control form-control-lg"
                placeholder="New password"
                v-model="password"
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              :disabled="isSubmittingUser || isLoadingFile"
            >
              Update Settings
            </button>
          </fieldset>
        </form>
        <hr />
        <button class="btn btn-outline-danger" @click="logout">Or click here to logout.</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import MvcValidationErrors from '@/components/ValidationErrors.vue'
import {actionTypes} from '@/store/modules/auth'
import {actionTypes as actionTypeFileUpload} from '@/store/modules/fileUpload'
import ImageUpload from '@/components/ImageUpload.vue'

const store = useStore()
const router = useRouter()

const image = ref('')
const username = ref('')
const bio = ref('')
const email = ref('')
const password = ref('')

const currentUser = computed(() => store.state.auth.currentUser)

email.value = currentUser.value.email
bio.value = currentUser.value.bio
username.value = currentUser.value.username

const isSubmittingUser = computed(() => store.state.auth.isSubmitting)
const isLoadingFile = computed(() => store.state.fileUpload.isLoading)
const validationsErrors = computed(() => store.state.auth.validationsErrors)

const onSubmit = () => {
  store
    .dispatch(actionTypes.update, {
      email: email.value,
      bio: bio.value,
      image: image.value,
      username: username.value,
      password: password.value,
    })
    .then((user) => {
      console.log('successfully updated user', user)
      router.push({name: 'globalFeed'})
      store.dispatch(actionTypes.getCurrentUser, {}).then()
    })
}

const onSubmitImage = (files) => {
  if (files === null) return
  const formData = new FormData()
  formData.append('image', files[0])
  store
    .dispatch(actionTypeFileUpload.fileUpload, formData)
    .then((filename) => {
      console.log('Successfully uploaded image', filename)
      image.value = filename
    })
    .catch((error) => {
      console.error('Error uploading image', error)
    })
}

const logout = () => {
  store.dispatch(actionTypes.logout, {credentials: username.value})
  router.push({name: 'login'})
}
</script>

<style scoped></style>
