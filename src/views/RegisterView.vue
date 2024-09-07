<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Sign up</h1>
					<p class="text-xs-center">
						<router-link :to="{name: 'login'}">Have an account</router-link>
					</p>
          <mcv-validation-errors
            v-if="validationsErrors"
            :validationsErrors="validationsErrors"
          />
					<form @submit.prevent="onSubmit">
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="text" placeholder="Username" v-model="username" value="bfkekhcwhry4ry3ry3894yr" />
						</fieldset>

						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="email" placeholder="Email" v-model="email" value="bfkekhcwhry4ry3ry3894yr@85fn7n9857.ru" />
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password" value="bfkekhcwhry4ry3ry38ggduy43tr435694yr" />
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right" type="submit" :disabled="isSubmitting">Sign up</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { actionTypes } from '@/store/modules/auth'
import McvValidationErrors from '@/components/ValidationErrors.vue'

const store = useStore()
const router = useRouter()

const email = ref('')
const username = ref('')
const password = ref('')

const isSubmitting = computed(() => store.state.auth.isSubmitting)
const validationsErrors = computed(() => store.state.auth.validationsErrors)

const onSubmit = () => {
  store
    .dispatch(actionTypes.register, {
      email: email.value,
      username: username.value,
      password: password.value,
    })
    .then((user) => {
      console.log('successfully registered user', user)
      router.push({ name: 'globalFeed' })
    })
}
</script>

<style lang="scss" scoped></style>
