import Vue from 'vue';
import { mapState } from 'vuex';
// import moment from 'moment';
import { DEVICE_TYPE } from '../utils/device';
// import CookieKey from '../config/cookie';
// import {
//     formatCurrency,
//     roundNumber,
//     formatTimeStampToDateTime,
//     formatTimeStampToDate
// } from '../utils/common';
//
Vue.mixin({
    computed: {
        ...mapState({
            device: (state) => state.device,
            navTheme: (state) => state.theme,
            layoutMode: (state) => state.layout,
            fixSiderbar: (state) => state.fixSiderbar,
            contentWidth: (state) => state.contentWidth,
            autoHideHeader: (state) => state.autoHideHeader,
            fixSidebar: (state) => state.fixSiderbar,
            sidebarOpened: (state) => state.sidebar,
            fixedHeader: (state) => state.fixedHeader,
            multiTab: (state) => state.multiTab,
            formatDateString: (state) =>
                state.locale === 'vi' ? 'DD/MM/YYYY' : 'YYYY-MM-DD',
            formatDateTimeString: (state) =>
                state.locale === 'vi' ? 'DD/MM/YYYY HH:mm' : 'YYYY-MM-DD HH:mm'
        }),
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
            return this.layoutMode === 'topmenu';
        },
        isSideMenu() {
            return !this.isTopMenu;
        }
    },
    methods: {
        // formatTimeStampToDateTime(value, format = this.formatDateTimeString) {
        //     return formatTimeStampToDateTime(value, format);
        // },
        // formatTimeStampToDate(value, format = this.formatDateString) {
        //     return formatTimeStampToDate(value, format);
        // },
        // roundNumber(value, decimals = 2) {
        //     return roundNumber(value, decimals);
        // },
        // formatCurrency(value) {
        //     return formatCurrency(value);
        // },
        // changeAlias(alias) {
        //     let str = alias;
        //     str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
        //     str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
        //     str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
        //     str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
        //     str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
        //     str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
        //     str = str.replace(/đ/g, 'd');
        //     str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
        //     str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
        //     str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
        //     str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
        //     str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
        //     str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
        //     str = str.replace(/Đ/g, 'D');
        //     return str;
        // }
    }
});
