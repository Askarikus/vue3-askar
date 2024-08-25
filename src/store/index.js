import { createStore } from 'vuex';
import auth from '@/store/modules/auth';
import feed from '@/store/modules/feed';
import article from '@/store/modules/article';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		auth,
    feed,
    article
	},
});
