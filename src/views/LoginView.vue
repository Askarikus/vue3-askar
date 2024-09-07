<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">Need an account</router-link>
          </p>
          <mcv-validation-errors
            v-if="validationsErrors"
            :validationsErrors="validationsErrors"
          />
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="email"
                value=""
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="password"
                value=""
              />
            </fieldset>
            <button
              class="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              :disabled="isSubmitting"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {actionTypes} from '@/store/modules/auth'
import McvValidationErrors from '@/components/ValidationErrors.vue'
const store = useStore()
const router = useRouter()
const email = ref('')
const password = ref('')

const onSubmit = () => {
  store
    .dispatch(actionTypes.login, {
      email: email.value,
      password: password.value,
    })
    .then((user) => {
      console.log('successfully logged user', user)
      router.push({name: 'globalFeed'})
    })
}
const isSubmitting = computed(() => store.state.auth.isSubmitting)
const validationsErrors = computed(() => store.state.auth.validationsErrors)
</script>

<style lang="scss" scoped></style>
