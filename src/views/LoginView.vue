<template>
	<div class="auth-page">
		<div class="container page">
			<div class="row">
				<div class="col-md-6 offset-md-3 col-xs-12">
					<h1 class="text-xs-center">Sign in</h1>
					<p class="text-xs-center">
						<router-link :to="{name: 'register'}">Need an account</router-link>
					</p>
					<form @submit.prevent="onSubmit">
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="email" placeholder="Email" v-model="email" value="bfkekhcwhry4ry3ry3894yr@85fn7n9857.ru" />
						</fieldset>
						<fieldset class="form-group">
							<input class="form-control form-control-lg" type="password" placeholder="Password" v-model="password" value="bfkekhcwhry4ry3ry38ggduy43tr435694yr" />
						</fieldset>
						<button class="btn btn-lg btn-primary pull-xs-right" type="submit" :disabled="isSubmitting">Sign In</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/auth'
export default {
  name: 'McvLogin',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed:{
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.login, {
          email: this.email,
          password: this.password,
        })
        .then((user) => {
          console.log('successfully logged user', user)
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
