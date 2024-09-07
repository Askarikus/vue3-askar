<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">Something went wrong</div>
    <div class="sidebar" v-if="tags">
      <p>PopularTags</p>
      <router-link
        v-for="tag in tags"
        :key="tag"
        :to="{name: 'tag', params: {slug: tag}}"
        class="tag-default tag-pill"
      >
        {{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { actionTypes } from '@/store/modules/tag.js'

const store = useStore()

const tags = computed(() => store.state.tag.data)
const isLoading = computed(() => store.state.tag.isLoading)
const error = computed(() => store.state.tag.error)

onMounted(() => {
  store.dispatch(actionTypes.getPopularTags)
})
</script>

<style lang="scss" scoped></style>
