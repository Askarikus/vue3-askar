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
      <MvcPagination :currentPage="currentPage" :total="countTotalItems" :url="url" :limit="10" />
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {computed, defineProps, onMounted, watch} from 'vue'
import MvcArticle from '@/components/MvcArticle.vue'
import MvcLoader from '@/components/MvcLoader.vue'
import {actionTypes} from '@/store/modules/feed'
import queryString from 'query-string'
import MvcPagination from '@/components/MvcPagination.vue'
const store = useStore()
const router = useRouter()

const props = defineProps({
  apiUrl: {
    type: String,
    required: true,
    default: '/articles',
  },
})

const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
const isLoading = computed(() => store.state.feed.isLoading)
const feed = computed(() => store.state.feed.data)
const error = computed(() => store.state.feed.error)

const currentPage = computed(() => Number(router.currentRoute.value.query.page || '1'))
const countTotalItems = computed(() => feed.value.articlesCount)
const url = computed(() => {router.currentRoute.value.path})


const getPagedUrl = () =>{
  const separatedUrl = props.apiUrl.split('?')
  const parsedUrl = queryString.parse(separatedUrl[1])
  // console.log(parsedUrl);
  const stringifiedParams = queryString.stringify({
        page: currentPage.value,
        ...parsedUrl,
      })
  // console.log(stringifiedParams)
  const apiUrlWithParams = `${separatedUrl[0]}?${stringifiedParams}`
  // console.log(apiUrlWithParams);
  store.dispatch(actionTypes.getFeed, {
    apiUrl: apiUrlWithParams,
    isLoggedIn: isLoggedIn.value,
  })
}

watch(currentPage, () => {
  console.log('refreshed page: ', currentPage.value);
  getPagedUrl()
})

onMounted(() => {
  getPagedUrl()
})

</script>
