import { createRouter, createWebHashHistory } from 'vue-router';
import GlobalFeed from '@/views/GlobalFeedView.vue';
import YourFeed from '@/views/YourFeedView.vue'
import TagFeed from '@/views/TagFeedView.vue'
import RegisterView from '@/views/RegisterView.vue';
import LoginView from '@/views/LoginView.vue';
import ArticleView from '@/views/ArticleView.vue';
import MvcCreateArticle from "@/views/CreateArticleView.vue";
import MvcProfileUser from "@/views/UserProfileView.vue";
import SettingsView from "@/views/SettingsView.vue";

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
    path: '/tags/:slug',
    name: 'tagFeed',
    component: TagFeed,
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
		path: '/settings',
		name: 'settings',
		component: SettingsView,
	},
	{
		path: '/articles/:slug',
		name: 'article',
		component: ArticleView,
	},
	{
		path: '/feed/:slug',
    name: 'tag',
    component: TagFeed,
	},
  {
    path: '/userProfile/:slug',
    name: 'userProfile',
    component: MvcProfileUser,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: MvcCreateArticle,
  },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
