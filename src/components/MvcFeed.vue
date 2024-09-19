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
import {computed, defineProps, onMounted} from 'vue'
import MvcArticle from '@/components/MvcArticle.vue'
import MvcLoader from '@/components/MvcLoader.vue'
import { actionTypes } from '@/store/modules/feed'
const store = useStore()

const props = defineProps({
  apiUrl: {
    type: String,
    required: true,
    default: '/articles'
  }
})

onMounted(() => {
  store.dispatch(actionTypes.getFeed, {apiUrl: props.apiUrl, isLoggedIn: isLoggedIn.value})
});

const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
const isLoading = computed(() => store.state.feed.isLoading)
const feed = computed(() => store.state.feed.data)
const error = computed(() => store.state.feed.error)
</script>
