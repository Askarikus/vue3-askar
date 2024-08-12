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
    },
  },
}
</script>

<style lang="scss" scoped></style>
