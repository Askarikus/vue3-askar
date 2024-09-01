<template>
	<div>
		<nav class="navbar navbar-light">
			<div class="container">
				<router-link class="navbar-brand" :to="{name: 'globalFeed'}">conduit</router-link>
				<ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <router-link :to="{name: 'globalFeed'}" exact-active-class="active">Home</router-link>
          </li>
          <template v-if="isLoggedIn">
            <li class="nav-item">
              <router-link :to="{name: 'createArticle'}" active-class="active">
                <i class="ion-compose">&nbsp;</i>
                New Article
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'settings'}" active-class="active">
                <i class="ion-gear-a">&nbsp;</i>
                Settings
              </router-link>
            </li>
            <li class="nav-link">
              <router-link
                :to="{
                  name: 'userProfile',
                  params: {slug: currentUser.username},
                }"
                active-class="active"
              >
                <img :src="currentUser.image" class="user-pic" />
                &nbsp;
                {{ currentUser.username }}
              </router-link>
            </li>
          </template>
          <template v-if="isAnonymous">
					<li class="nav-item">
						<RouterLink :to="{name: 'login'}" active-class="active">Sign In</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink :to="{name: 'register'}" active-class="active">Sign Up</RouterLink>
					</li>
        </template>

				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import { getterTypes } from '@/store/modules/auth'
import {mapGetters} from 'vuex'
export default {
  name: 'MainNavTopBar',
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLoggedIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous
    })
  },

}
</script>
