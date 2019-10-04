import Vue from 'vue';
import {mapState, mapGetters} from 'vuex';
import {DEVICE_TYPE} from '../utils/device';
import CookieKey from '../config/cookie';
import moment from 'moment';
import {formatCurrency, roundNumber, formatTimeStampToDateTime, formatTimeStampToDate} from '../utils/common';

Vue.mixin({
    computed: {
        ...mapState({
            device: state => state.device,
            navTheme: state => state.theme,
            layoutMode: state => state.layout,
            fixSiderbar: state => state.fixSiderbar,
            contentWidth: state => state.contentWidth,
            fixSidebar: state => state.fixSiderbar,
            sidebarOpened: state => state.sidebar,
            fixedHeader: state => state.fixedHeader,
            multiTab: state => state.multiTab,
            formatDateString: state => state.locale === 'vi' ? "DD/MM/YYYY" : "YYYY-MM-DD",
            formatDateTimeString: state => state.locale === 'vi' ? "DD/MM/YYYY HH:mm" : "YYYY-MM-DD HH:mm",
        }),
        ...mapGetters('auth', ['user']),
        currentUser() {
            return this.user ? this.user : this.$store.$cookies.get(CookieKey.USER);
        },
        isMobile() {
            return this.device === DEVICE_TYPE.MOBILE;
        },
        isDesktop() {
            return this.device === DEVICE_TYPE.DESKTOP;
        },
        isTablet() {
            return this.device === DEVICE_TYPE.TABLET;
        },
        isTopMenu() {
            return this.layoutMode === 'topmenu'
        },
        isSideMenu() {
            return !this.isTopMenu;
        },
        access_token() {
            return this.$store.$cookies.get(CookieKey.ACCESS_TOKEN);
        }
    },
    methods: {
        formatTimeStampToDateTime(value, format = this.formatDateTimeString) {
            return formatTimeStampToDateTime(value, format);
        },
        formatTimeStampToDate(value, format = this.formatDateString) {
            return formatTimeStampToDate(value, format);
        },
        roundNumber(value, decimals = 2) {
            return roundNumber(value, decimals);
        },
        formatCurrency(value) {
            return formatCurrency(value);
        },
        changeAlias(alias) {
            let str = alias;
            str = str.toLowerCase();
            str = str.replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a");
            str = str.replace(/[èéẹẻẽêềếệểễ]/g, "e");
            str = str.replace(/[ìíịỉĩ]/g, "i");
            str = str.replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o");
            str = str.replace(/[ùúụủũưừứựửữ]/g, "u");
            str = str.replace(/[ỳýỵỷỹ]/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/ + /g, " ");
            return str;
        }
    }
});
