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
    breadcrumbs: []
});

export const getters = {
    device: (state) => state.device,
    sidebar: (state) => state.sidebar,
    breadcrumbs: (state) => state.breadcrumbs,
    messageOff: (state) => state.messageOff
};

export const actions = {
    setSidebar({ commit }, type) {
        commit('SET_SIDEBAR_TYPE', type);
    },
    ToggleLayoutMode({ commit }, mode) {
        commit('TOGGLE_LAYOUT_MODE', mode);
    }
};

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale;
        }
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device;
    },
    SET_SIDEBAR_TYPE: (state, type) => {
        state.sidebar = type;
    },
    TOGGLE_LAYOUT_MODE: (state, layout) => {
        state.layout = layout;
    },
    TOGGLE_THEME: (state, theme) => {
        state.theme = theme;
    },
    TOGGLE_FIXED_HEADER: (state, fixed) => {
        state.fixedHeader = fixed;
    },
    TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
        state.fixSiderbar = fixed;
    },
    TOGGLE_CONTENT_WIDTH: (state, type) => {
        state.contentWidth = type;
    },
    TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
        state.autoHideHeader = show;
    },
    TOGGLE_WEAK: (state, flag) => {
        state.weak = flag;
    },
    TOGGLE_COLOR: (state, color) => {
        state.color = color;
    },
    TOGGLE_MULTI_TAB: (state, bool) => {
        state.multiTab = bool;
    },
    SET_BREADCRUMBS: (state, breadcrumbs) => {
        state.breadcrumbs = breadcrumbs;
    }
};
