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
import { computed } from 'vue'
import {useRouter} from 'vue-router'
import MvcFeed from '@/components/MvcFeed.vue'
import MvcBanner from '@/components/MvcBanner.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import MvcPopularTags from '@/components/MvcPopularTags.vue'

const router = useRouter()
const apiUrl = computed(() => (`articles?tag=${router.currentRoute.value.params.slug}`))
</script>

<style scoped></style>
