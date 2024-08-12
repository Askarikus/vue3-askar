<template>
	<div>Register</div>
</template>

<script>


export default {
  name: 'McvRegister',
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
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
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
