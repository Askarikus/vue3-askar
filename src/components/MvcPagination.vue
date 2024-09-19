<template>
  <div>
    <ul class="pagination">
      <li
        v-for="page in pages"
        :key="page"
        class="page-item"
        :class="{active: props.currentPage === page}"
      >
        <router-link :to="{path: props.url, query: {page: page}}" class="page-link">
          {{ page }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  limit: {
    type: Number,
    required: true,
    default: 10,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
})

const pages = computed(() => {
  const pagesCount = Math.ceil(props.total / 10)
  // console.log(pagesCount);
  // return Array.from({ length: pagesCount }, (_, i) => i + 1)
  return pagesCount
})
</script>
