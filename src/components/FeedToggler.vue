<template>
  <div class="feed-toggler">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item">
        <router-link
        v-if="isLoggedIn"
        :to="{ name:'yourFeed'}"
        class="nav-link"
        >
        YourFeed
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
        :to="{ name:'globalFeed'}"
        class="nav-link"
        >
        GlobalFeed
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'
export default {
  name: 'FeedToggler',
  computed: {
    ...mapGetters({
      isLoggedIn: getterTypes.isLoggedIn,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
