import { createRouter, createWebHashHistory } from 'vue-router';
import GlobalFeed from '@/views/GlobalFeedView.vue';
import YourFeed from '@/views/YourFeedView.vue'
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import McvArticle from '@/views/McvArticle.vue';

const routes = [
	{
		path: '/',
		name: 'globalFeed',
		component: GlobalFeed,
	},
  {
    path: '/feed',
    name: 'yourFeed',
    component: YourFeed,
  },
	{
		path: '/register',
		name: 'register',
		component: RegisterView,
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/articles/:slug',
		name: 'article',
		component: McvArticle,
	},
  {
    path: '/userProfile/:slug',
    name: 'userProfile',
    component: GlobalFeed,
  },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
