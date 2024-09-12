<template>
  <div>
    <Mvc-loader v-if="isLoading" />
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <mvc-article :article="article" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import MvcArticle from '@/components/MvcArticle.vue'
import MvcLoader from '@/components/MvcLoader.vue'
const store = useStore()

const isLoading = computed(() => store.state.feed.isLoading)
const feed = computed(() => store.state.feed.data)
const error = computed(() => store.state.feed.error)
</script>
