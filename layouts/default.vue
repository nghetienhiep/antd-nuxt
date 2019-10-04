<template>
    <a-locale-provider :locale="$i18n.locale === 'vi' ? vi_VN : en_US">
<!--        <no-ssr>-->
<!--            -->
<!--        </no-ssr>-->
        <a-layout :class="['layout', device]">
            <a-drawer
                    v-if="isMobile"
                    placement="left"
                    :wrapClassName="`drawer-sider ${navTheme}`"
                    :closable="false"
                    :visible="collapsed"
                    @close="drawerClose">
                <side-menu
                        mode="inline"
                        :theme="navTheme"
                        :menus="menus"
                        :collapsed="false"
                        :collapsible="true"
                        @menuSelect="menuSelect"
                ></side-menu>
            </a-drawer>
            <side-menu
                    v-else-if="isSideMenu"
                    mode="inline"
                    :theme="navTheme"
                    :menus="menus"
                    :collapsed="collapsed"
                    :collapsible="true"
            ></side-menu>
            <a-layout :class="[layoutMode, `content-width-${contentWidth}`]"
                      :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
                <!-- layout header -->
                <global-header
                        :mode="layoutMode"
                        :menus="menus"
                        :theme="navTheme"
                        :collapsed="collapsed"
                        :c-device="device"
                        @toggle="toggle"/>

                <!-- layout content -->
                <a-layout-content
                        :style="{ height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0' }">
                    <transition name="page-transition">
                        <nuxt/>
                    </transition>
                </a-layout-content>

                <!-- layout footer -->
                <!--                <a-layout-footer>-->
                <!--                    <global-footer/>-->
                <!--                </a-layout-footer>-->
            </a-layout>
        </a-layout>
    </a-locale-provider>
</template>
<script>
    import {mapActions, mapState} from 'vuex';
    import SideMenu from '../components/menu/SideMenu';
    import GlobalHeader from '../components/GlobalHeader';
    import GlobalFooter from '../components/GlobalFooter';
    import {triggerWindowResizeEvent} from '../utils/util';
    import vi_VN from 'ant-design-vue/lib/locale-provider/vi_VN';
    import en_US from 'ant-design-vue/lib/locale-provider/en_US';
    import moment from 'moment';

    import 'moment/locale/vi';
    import 'moment/locale/en-gb';

    export default {
        data() {
            return {
                collapsed: false,
                menus: [],
                en_US,
                vi_VN
            }
        },
        computed: {
            contentPaddingLeft() {
                if (!this.fixSidebar || this.isMobile) {
                    return '0'
                }
                if (this.sidebarOpened) {
                    return '256px'
                }
                return '80px'
            }
        },
        created() {
            moment.locale(this.$i18n.locale);
            this.collapsed = !this.sidebarOpened
        },
        mounted() {
            const userAgent = navigator.userAgent;
            if (userAgent.indexOf('Edge') > -1) {
                this.$nextTick(() => {
                    this.collapsed = !this.collapsed;
                    setTimeout(() => {
                        this.collapsed = !this.collapsed;
                    }, 16)
                })
            }
        },
        methods: {
            ...mapActions(['setSidebar']),
            toggle() {
                this.collapsed = !this.collapsed;
                this.setSidebar(!this.collapsed);
                triggerWindowResizeEvent();
            },
            menuSelect() {
                if (!this.isDesktop) {
                    this.collapsed = false
                }
            },
            drawerClose() {
                this.collapsed = false
            }
        },
        watch: {
            sidebarOpened(val) {
                this.collapsed = !val
            }
        },
        components: {
            SideMenu,
            GlobalHeader,
            GlobalFooter
        }
    }
</script>
<style lang="scss">
    @import "../assets/scss/theme/global";

    .page-transition-enter {
        opacity: 0;
    }

    .page-transition-leave-active {
        opacity: 0;
    }

    .page-transition-enter .page-transition-container,
    .page-transition-leave-active .page-transition-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
