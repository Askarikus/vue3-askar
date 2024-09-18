<template>
  <div class="ng-scope">
    <div class="profile-page ng-scope">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div v-if="userProfile" class="col-xs-12 col-md-10 offset-md-1">
              <img class="user-img" :src="userProfile.image" />
              <h4 class="ng-binding">{{ userProfile.username }}</h4>
              <p class="ng-binding">{{ userProfile.bio }}</p>
              <button
                class="btn btn-sm ng-binding pull-xs-right"
                :class="{
                  'btn-primary': !userProfile.follow,
                  'action-btn': userProfile.follow,
                  'btn-outline-secondary': userProfile.follow,
                }"
                @click="followUser(userProfile.follow)"
              >
                {{ followString }} {{ userProfile.username }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <Mvc-feed :api-url="apiUrl" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, onMounted, watch} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import MvcFeed from '@/components/MvcFeed.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import {actionTypes as actionTypesFeed} from '@/store/modules/feed'
import {actionTypes as actionTypesProfile} from '@/store/modules/profile'

const store = useStore()
const router = useRouter()
const apiUrl = ref(`/articles?author=${router.currentRoute.value.params.slug}`)

onMounted(() => {
  store.dispatch(actionTypesProfile.getUserProfile, {
    username: router.currentRoute.value.params.slug,
  })
  store.dispatch(actionTypesFeed.getFeed, {apiUrl: apiUrl.value})
})
const userProfile = computed(() => store.state.profile.userProfile)
const followString = computed(() =>
  userProfile.value && userProfile.value.follow ? 'Unfollow' : 'Follow'
)

const followUser = (follow) => {
  if (follow) {
    store.dispatch(actionTypesProfile.unfollowUser, {
      username: router.currentRoute.value.params.slug,
    })
  } else {
    store.dispatch(actionTypesProfile.followUser, {
      username: router.currentRoute.value.params.slug,
    })
  }
}
</script>

<style scoped></style>
