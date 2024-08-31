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
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {getterTypes} from '@/store/modules/auth'
export default {
  name: 'MvcUserProfile',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
    }),
  },
}
</script>

<style scoped></style>
