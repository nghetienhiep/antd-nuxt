export const state = () => ({
    locales: ['en', 'vi'],
    locale: 'vi',
    sidebar: true,
    device: 'desktop',
    layout: 'sidemenu',
    theme: 'dark',
    fixedHeader: true,
    fixSiderbar: true,
    contentWidth: '',
    autoHideHeader: false,
    weak: false,
    color: null,
    multiTab: true,
    breadcrumbs: [],
    messageOff: true,
    error: null
});

export const getters = {
    device: state => state.device,
    sidebar: state => state.sidebar,
    breadcrumbs: state => state.breadcrumbs,
    messageOff: state => state.messageOff,
};

export const actions = {
    setSidebar({commit}, type) {
        commit('SET_SIDEBAR_TYPE', type)
    },
    ToggleLayoutMode({commit}, mode) {
        commit('TOGGLE_LAYOUT_MODE', mode)
    },
    checkApiCode({commit, dispatch}, {result, from}) {
        let isClient = !process.server;
        const duration = 2;

        if (result) {
            let {data, code} = result;
            commit('SET_CODE', code);
            if (code === 200) {
                return data;
            } else if (code === 401) {
                if (isClient && getters.messageOff) {
                    commit('SET_MESSAGE_STATUS', false);
                    this._vm.$message.error(this.app.i18n.t('notHaveAccess'), duration, () => {
                        commit('SET_MESSAGE_STATUS', true);
                    });
                }
                dispatch("auth/signOut");
            } else if (code === 403) {
                if (isClient && getters.messageOff) {
                    commit('SET_MESSAGE_STATUS', false);
                    this._vm.$message.error(data.message, duration, () => {
                        commit('SET_MESSAGE_STATUS', true);
                    });
                }
                // if (getters.currentPath.indexOf('/admin') > -1) {
                //     this._vm.$nuxt.error({statusCode: 403, message: data.message})
                // }
            } else if (code === 500) {
                if (isClient && getters.messageOff) {
                    commit('SET_MESSAGE_STATUS', false);
                    this._vm.$message.error(data.message, duration, () => {
                        commit('SET_MESSAGE_STATUS', true);
                    });
                }
                // if (getters.currentPath.indexOf('/admin') > -1) {
                //     this._vm.$nuxt.error({statusCode: 500, message: data.message})
                // }
            } else {
                // commit("SET_ERROR",)
            }
        } else {
            if (isClient && getters.messageOff) {
                commit('SET_MESSAGE_STATUS', false);
                this._vm.$message.error(this.app.i18n.t('notHaveAccess'), duration, () => {
                    commit('SET_MESSAGE_STATUS', true);
                });
            }
            dispatch("auth/signOut");
        }
    },
    setError({commit, dispatch}, {error, from}) {
        commit("SET_ERROR", error);
        dispatch("checkApiCode", {
            result: error.response ? {
                code: error.response.status,
                data: error.response.data
            } : null, from
        })
    }
};

export const mutations = {
    SET_MESSAGE_STATUS(state, messageOff) {
        state.messageOff = messageOff;
    },
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    },
    SET_SIDEBAR_TYPE: (state, type) => {
        state.sidebar = type
    },
    TOGGLE_LAYOUT_MODE: (state, layout) => {
        state.layout = layout;
    },
    TOGGLE_THEME: (state, theme) => {
        state.theme = theme
    },
    TOGGLE_FIXED_HEADER: (state, fixed) => {
        state.fixedHeader = fixed
    },
    TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
        state.fixSiderbar = fixed
    },
    TOGGLE_CONTENT_WIDTH: (state, type) => {
        state.contentWidth = type
    },
    TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
        state.autoHideHeader = show
    },
    TOGGLE_WEAK: (state, flag) => {
        state.weak = flag
    },
    TOGGLE_COLOR: (state, color) => {
        state.color = color
    },
    TOGGLE_MULTI_TAB: (state, bool) => {
        state.multiTab = bool
    },
    SET_BREADCRUMBS: (state, breadcrumbs) => {
        state.breadcrumbs = breadcrumbs
    },
    SET_ERROR(state, error) {
        state.error = error;
    }
};
