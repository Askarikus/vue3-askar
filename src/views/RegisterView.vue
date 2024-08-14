<template>
	<div>
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
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'McvRegister',
  data() {
    return {
      email: '',
      username: '',
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
      console.log('submitted form')
      this.$store
        .dispatch(actionTypes.register, {
          email: this.email,
          username: this.username,
          password: this.password,
        })
        .then((user) => {
          console.log('successfully registered user', user)
          // this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
