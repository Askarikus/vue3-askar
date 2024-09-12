<template>
  <div>
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
        <button class="pull-xs-right" @click="toggleFavorite"> ADD TO FAVORITE
          <span class="counter"> {{ article.favoritesCount }} </span>
        </button>
        <router-link :to="{name: 'article', params: {slug: article.slug }}"
        class="preview-link">
          <h1>{{ article.title }}</h1>
        </router-link>
      </div>
        <span> {{ article.title }}</span>

  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import { actionTypes } from '@/store/modules/article';
import {defineProps } from 'vue';

const store = useStore()

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: {}
  }
})

const toggleFavorite = () => {
  store.dispatch(actionTypes.favoriteArticle, { slug: props.article.slug })
  // store.dispatch(actionTypes.getArticle, { slug: props.article.slug})
}
</script>

<style scoped>

</style>
