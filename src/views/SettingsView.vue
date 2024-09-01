<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>
        <form @submit.prevent="onSubmit">
          <fieldset>
            <fieldset class="form-group">
              <input
                aria-label="Avatar picture url"
                type="text"
                class="form-control"
                placeholder="URL of profile picture"
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
              :disabled="isSubmitting"
            >
              Update Settings
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import McvValidationErrors from '@/components/ValidationErrors.vue'
import {actionTypes} from '@/store/modules/auth'
export default {
  name: 'MvcSettings',
  data() {
    return {
      username: '',
      bio: '',
      email: '',
      password: '',
    }
  },
  components: {
    McvValidationErrors
  },
  computed:{
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationsErrors: (state) => state.auth.validationsErrors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.update, {
          email: this.email,
          bio: this.bio,
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          console.log('successfully registered user', user)
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>

<style scoped></style>
