<template>
  <div class="home">
    <div class="home-page">
      <Mvc-banner />
      <div class="container">
        <div class="container-page">
          <div class="row">
            <div class="col-md-9">
              <feed-toggler />
              <Mvc-feed :api-url="apiUrl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import MvcFeed from '@/components/MvcFeed.vue'
import MvcBanner from '@/components/MvcBanner.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import { actionTypes } from '@/store/modules/feed'

const store = useStore()

const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
const apiUrl = ref('/articles/feed')

onMounted(() => {
  store.dispatch(actionTypes.getFeed, { apiUrl: apiUrl.value })
})
</script>

<style scoped></style>
