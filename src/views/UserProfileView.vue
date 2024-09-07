<template>
  <div class="ng-scope">
    <div class="profile-page ng-scope">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img class="user-img" :src="currentUser.image" />
              <h4 class="ng-binding">{{ currentUser.username }}</h4>
              <p class="ng-binding">{{ currentUser.bio }}</p>
              <button
                class="btn btn-sm action-btn ng-binding btn-outline-secondary"
              >
                Follow {{ currentUser.username }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <feed-toggler />
            <mcv-feed :api-url="apiUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { getterTypes } from '@/store/modules/auth'
import McvFeed from '@/components/McvFeed.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import { actionTypes } from '@/store/modules/feed'

const store = useStore()
const route = useRoute()

const currentUser = computed(() => store.getters[getterTypes.currentUser])
const apiUrl = ref(`/articles?author=${route.params.slug}`)

onMounted(() => {
  store.dispatch(actionTypes.getFeed, { apiUrl: apiUrl.value })
})
</script>

<style scoped></style>
