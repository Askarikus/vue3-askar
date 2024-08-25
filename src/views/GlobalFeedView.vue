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

<script>
import {mapState} from 'vuex'
import McvFeed from '@/components/McvFeed.vue'
import McvBanner from '@/components/McvBanner.vue'
import FeedToggler from '@/components/FeedToggler.vue'
import {actionTypes} from '@/store/modules/feed'
export default {
  name: 'GlobalFeed',
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
  components: {
    McvFeed,
    McvBanner,
    FeedToggler,
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
  },
}
</script>

<style scoped></style>
