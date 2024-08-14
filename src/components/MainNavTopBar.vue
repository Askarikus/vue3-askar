<template>
	<div>
		<!-- <template> -->
		<nav class="navbar navbar-light">
			<div class="container">
				<router-link class="navbar-brand" :to="{name: 'globalFeed'}">conduit</router-link>
				<ul class="nav navbar-nav pull-xs-right">
					<li class="nav-item">
						<RouterLink :to="{name: 'login'}" active-class="active">Sign In</RouterLink>
					</li>
					<li class="nav-item">
						<RouterLink :to="{name: 'register'}" active-class="active">Sign Up</RouterLink>
					</li>
				</ul>
			</div>
		</nav>
		<!-- </template> -->
	</div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: 'MainNavTopBar',
  components: {
    RouterLink
  }
}
</script>
