import authApi from '@/api/auth';
import { setItem } from '@/helpers/persistanceLocalStorage';

const state = {
	isSubmitting: false,
	isLoggedIn: false,
};

export const mutationType = {
	registerStart: '[auth] registerStart',
	registerSuccess: '[auth] registerSuccess',
	registerFailure: '[auth] registerFailure',
	loginStart: '[auth] loginStart',
	loginSuccess: '[auth] loginSuccess',
	loginFailure: '[auth] loginFailure',
};

const mutations = {
	[mutationType.registerStart](state) {
		state.isSubmitting = true;
	},
	[mutationType.registerSuccess](state) {
		(state.isSubmitting = false), (state.isLoggedIn = true);
	},
	[mutationType.registerFailure](state) {
		state.isSubmitting = false;
	},
	[mutationType.loginStart](state) {
		state.isSubmitting = true;
	},
	[mutationType.loginSuccess](state) {
		(state.isSubmitting = false), (state.isLoggedIn = true);
	},
	[mutationType.loginFailure](state) {
		state.isLoggedIn = false;
		state.isSubmitting = false;
	},
};

export const getterTypes = {
	isLoggedIn: '[auth] isLoggedIn',
};

const getters = {
	[getterTypes.isLoggedIn]: (state) => {
		return Boolean(state.isLoggedIn);
	},
};

export const actionTypes = {
	register: '[auth] register',
	login: '[auth] login',
};

const actions = {
	[actionTypes.register](context, credentials) {
		return new Promise((resolve) => {
			context.commit(mutationType.registerStart);
			authApi
				.register(credentials)
				.then((response) => {
					context.commit(mutationType.registerSuccess, response.data.user);
					setItem('accessToken', response.data.user.token);
					resolve(response.data.user);
				})
				.catch((result) => {
					// context.commit(mutationType.registerFailure, result.response.data.errors);
				});
		});
	},
	[actionTypes.login](context, credentials) {
		return new Promise((resolve) => {
			context.commit(mutationType.loginStart);
			authApi
				.login(credentials)
				.then((response) => {
					context.commit(mutationType.loginSuccess, response.data.user);
					setItem('accessToken', response.data.user.token);
					resolve(response.data.user);
				})
				.catch((result) => {
					// context.commit(mutationType.loginFailure, result.response.data.errors);
				});
		});
	},
};

export default {
	state,
	mutations,
	actions,
	getters,
};
