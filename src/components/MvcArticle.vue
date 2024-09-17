<template>
  <div>
    <div class="article-meta">
        <router-link :to="{name: 'userProfile', params: {slug: props.article.author.username}}">
          <img :src="props.article.author.image" alt=""/>
        </router-link>
        <router-link :to="{name: 'userProfile', params: {slug: props.article.author.username}}">
          <span> &nbsp; {{ props.article.author.username }}</span>
        </router-link>
        <span class="date">
          {{ props.article.createdAt }}
        </span>
        <MvcAddToFavorites :articleSlug="props.article.slug" :isFavorited="props.article.favorited" :count="props.article.favoritesCount"/>
        <router-link :to="{name: 'article', params: {slug: props.article.slug }}"
        class="preview-link">
          <h1>{{ props.article.title }}</h1>
        </router-link>
      </div>
        <span> {{ props.article.title }}</span>

  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {defineProps} from 'vue';
import MvcAddToFavorites from "@/components/MvcAddToFavorites.vue";

const store = useStore()

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: {}
  }
})

</script>

<style scoped>

</style>
