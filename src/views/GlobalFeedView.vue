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
            <div class="col-md-3">
              <div class="sidebar">
                <mvc-popular-tags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import McvFeed from '@/components/McvFeed.vue'
import McvBanner from '@/components/McvBanner.vue'
import MvcPopularTags from '@/components/MvcPopularTags.vue'
import FeedToggler from '@/components/FeedToggler.vue'
const store = useStore()
onMounted(() => {
  store.dispatch(actionTypes.getFeed, {apiUrl: apiUrl})
});
// const isLoggedIn = computed(() => store.state.auth.isLoggedIn)
const apiUrl = '/articles';
</script>

<style scoped></style>
