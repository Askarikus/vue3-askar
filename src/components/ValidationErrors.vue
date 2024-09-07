<template>
  <div>
    <ul class="error-messages">
      <li v-for="errorMessage in errorMessages" :key="errorMessage">
        {{ errorMessage }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  validationsErrors: {
    type: Object,
    required: true,
  },
})

const errorMessages = computed(() => {
  return (
    Object.keys(props.validationsErrors).flatMap((name) =>
      props.validationsErrors[name].map((message) => `${name} ${message}`)
    ) || []
  )
})
</script>
