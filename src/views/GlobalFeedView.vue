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
import MvcFeed from '@/components/MvcFeed.vue'
import MvcBanner from '@/components/MvcBanner.vue'
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
