<template>
	<main-nav-top-bar />
	<RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
import MainNavTopBar from '@/components/MainNavTopBar.vue';
export default {
  name: 'MvcApp',
  components: {
    MainNavTopBar,
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
