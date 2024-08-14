import { createRouter, createWebHashHistory } from 'vue-router';
import GlobalFeed from '@/views/GlobalFeed.vue';
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';

const routes = [
	{
		path: '/',
		name: 'globalFeed',
		component: GlobalFeed,
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
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
