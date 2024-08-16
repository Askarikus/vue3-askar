<template>
  <div>
    <ul class="error-messages">
      <li v-for="errorMessage in errorMessages" :key="errorMessage">
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'McvValidationErrors',
  props: {
    validationsErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {

      const arrayOfProperties = Object.keys(this.validationsErrors).map((name) => {
        const messages = this.validationsErrors[name]
        return messages.map((message) =>
          `${name} ${message}`
        )
      })
      return arrayOfProperties.flat() || []   // flatten the array of arrays into a single array of
    },
  },
}
</script>
