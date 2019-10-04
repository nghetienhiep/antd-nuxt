import $_api from '../api'
import CookieKey from '../config/cookie'

export const state = () => ({
    user: null
});

export const getters = {
    user: state => state.user
};

export const actions = {
    async signInWithGoogle({commit, dispatch}, fsdfsd) {
        try {
            let result = await $_api.auth.signInWithPopup($_api.googleAuthProvider);
            const rsUser = result.user;
            let user = {
                fullName: rsUser.displayName,
                email: rsUser.email,
                photoURL: rsUser.photoURL,
                phoneNumber: rsUser.phoneNumber
            };
            commit('SET_USER', user);
            this.$router.push(this.app.i18n.path(''));
        } catch (e) {
            dispatch("setError", {error: e, from: "auth/signInWithGoogle"}, {root: true})
        }
    },
    signOut({commit}) {
        $_api.auth.signOut()
            .then(() => {
                commit('SET_LOGOUT');
                this.$router.push(this.app.i18n.path('login'));
            })
            .catch(error => {

            })
    },
    async login({dispatch}, token) {
        try {
            let result = await this.$axios.$post(`/admin/login`, {
                google_token: token
            });
            return await dispatch('checkApiCode', {result, from: "auth/login"}, {root: true});
        } catch (e) {
            dispatch("setError", {error: e, from: "auth/login"}, {root: true})
        }
    }
};

export const mutations = {
    SET_USER(state, user) {
        this.$cookies.set(CookieKey.USER, user);
        state.user = user;
    },
    SET_LOGOUT(state) {
        this.$cookies.remove(CookieKey.ACCESS_TOKEN);
        this.$cookies.remove(CookieKey.USER);
        state.user = null;
    }
};
