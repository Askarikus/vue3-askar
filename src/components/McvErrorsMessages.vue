<template>
  <div>
    {{ message }}
  </div>
</template>

<script>


export default {
  name: 'McvErrorsMessages',
  props: {
    message:{
      type: String,
      required: false,
      default: 'Something error occurred'
    }
  }
}
</script>
