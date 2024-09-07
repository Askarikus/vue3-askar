<template>
  <div class="home">
    <div class="home-page">
      <mcv-banner />
      <div class="container">
        <div class="container-page">
          <div class="row">
            <div class="col-md-9">
              <feed-toggler />
              <mcv-feed :api-url="apiUrl" />
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
import McvFeed from '@/components/McvFeed.vue'
import McvBanner from '@/components/McvBanner.vue'
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
