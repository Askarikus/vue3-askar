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
        <button class="pull-xs-right"
        @click="toggleFavorite"
        :class="{
        'btn-primary': article.favorited,
        'btn-outline-primary': !article.favorited
      }">
          <ion-icon name="heart"></ion-icon>
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
import { actionTypes  as actionTypesArticle } from '@/store/modules/article';
import { actionTypes  as actionTypesFeed } from '@/store/modules/feed';
import {defineProps, defineEmits } from 'vue';

const store = useStore()

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: {}
  }
})

const toggleFavorite = () => {
  store.dispatch(actionTypesArticle.favoriteArticle, { slug: props.article.slug }).then(() => {
    store.dispatch(actionTypesFeed.getFeed, {apiUrl: '/articles'});
  })
}
</script>

<style scoped>

</style>
