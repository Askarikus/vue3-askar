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

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/tag.js'
export default {
  name: 'MvcPopularTags',
  computed: {
    ...mapState({
      tags: (state) => state.tag.data,
      isLoading: (state) => state.tag.isLoading,
      error: (state) => state.tag.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getPopularTags)
  },
}
</script>

<style lang="scss" scoped></style>
