<template>
  <div>
    <mcv-loader v-if="isLoading"/>
    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
      <div class="article-meta">
        <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
          <img :src="article.author.image" alt=""/>
        </router-link>
        <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
          <span> &nbsp; {{ article.author.username }}</span>
        </router-link>
        <span class="date">
          {{ article.createdAt }}
        </span>
        <div class="pull-xs-right"> ADD TO FAVORITE</div>
        <router-link :to="{name: 'article', params: {slug: article.slug }}"
        class="preview-link">
          <h1>{{ article.title }}</h1>
        </router-link>
      </div>
        <span> {{ article.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import McvLoader from '@/components/McvLoader.vue'

const store = useStore()

const isLoading = computed(() => store.state.feed.isLoading)
const feed = computed(() => store.state.feed.data)
const error = computed(() => store.state.feed.error)
</script>
