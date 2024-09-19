<template>
  <div class="article-page" v-if="article">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <div class="info">
            <!-- <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
          <img :src="article.author.image" alt=""/>
        </router-link> -->
        <span class="date">{{ article.createdAt }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container page">
      <Mvc-loader v-if="isLoading" />
      <div class="row article-content">
        <div class="col-xs-12">
          <div class="ng-binding">
            <p>{{ article.body }}</p>
          </div>
          <!-- <Mvc-tag-list :tags="article.tagList"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { actionTypes as articleActionType } from '@/store/modules/article'
import MvcLoader from '@/components/MvcLoader.vue'

const store = useStore()
const route = useRoute()

const article = computed(() => store.state.article.data)
const isLoading = computed(() => store.state.article.isLoading)

onMounted(() => {
  store.dispatch(articleActionType.getArticle, {
    slug: route.params.slug,
  })
})
</script>

<style lang="scss" scoped></style>
