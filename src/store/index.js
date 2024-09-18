import { createStore } from 'vuex';
import auth from '@/store/modules/auth';
import profile from '@/store/modules/profile';
import feed from '@/store/modules/feed';
import tag from '@/store/modules/tag';
import article from '@/store/modules/article';
import articleAddToFavorites from '@/store/modules/articleAddToFavorites';
import fileUpload from '@/store/modules/fileUpload';

export default createStore({
	state: {},
	mutations: {},
	actions: {},
	getters: {},
	modules: {
		auth,
    feed,
    tag,
    article,
    articleAddToFavorites,
    fileUpload,
    profile
	},
});
