<template>
  <div>
    <ul class="tag-list">
      <li v-for="tag in tags" :key="tag" class="tag-default tag-pill tag-outline">
      {{ tag }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'NcvTagList',
    props: {
      tags: {
        type: String,
        required: false
      }
    }
  }
</script>
