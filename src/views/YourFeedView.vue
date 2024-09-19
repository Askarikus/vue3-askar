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
import { ref } from 'vue'
import MvcFeed from '@/components/MvcFeed.vue'
import MvcBanner from '@/components/MvcBanner.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import MvcPopularTags from '@/components/MvcPopularTags.vue'
const apiUrl = ref('/articles/feed')
</script>

<style scoped></style>
