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
      <mcv-loader v-if="isLoading" />
      <div class="row article-content">
        <div class="col-xs-12">
          <div class="ng-binding">
            <p>{{ article.body }}</p>
          </div>
          <!-- <mcv-tag-list :tags="article.tagList"/> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {actionTypes as articleActionType} from '@/store/modules/article'
import McvLoader from '@/components/McvLoader.vue'
import {mapState, mapGetters} from 'vuex'
import article from '@/api/article'
export default {
  name: 'McvArticle',
  components: {
    McvLoader,
  },
  computed: {
    ...mapState({
      article: (state) => state.article.data,
      isLoading: (state) => state.article.isLoading,
    }),
  },
  mounted() {
    this.$store.dispatch(articleActionType.getArticle, {
      slug: this.$route.params.slug,
    })
  },
}
</script>

<style lang="scss" scoped></style>
