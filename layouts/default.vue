<template>
    <layout-config>
        <a-layout :class="['layout', device]">
            <a-drawer
                v-if="isMobile"
                @close="drawerClose"
                :wrapClassName="`drawer-sider ${navTheme}`"
                :closable="false"
                :visible="collapsed"
                placement="left"
            >
                <side-menu
                    @menuSelect="menuSelect"
                    :theme="navTheme"
                    :menus="menus"
                    :collapsed="false"
                    :collapsible="true"
                    mode="inline"
                ></side-menu>
            </a-drawer>
            <side-menu
                v-else-if="isSideMenu"
                :theme="navTheme"
                :menus="menus"
                :collapsed="collapsed"
                :collapsible="true"
                mode="inline"
            ></side-menu>
            <a-layout
                :class="[layoutMode, `content-width-${contentWidth}`]"
                :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }"
            >
                <!-- layout header -->
                <global-header
                    :mode="layoutMode"
                    :menus="menus"
                    :theme="navTheme"
                    :collapsed="collapsed"
                    :c-device="device"
                    @toggle="toggle"
                />

                <!-- layout content -->
                <a-layout-content
                    :style="{
                        height: '100%',
                        margin: '24px 24px 0',
                        paddingTop: fixedHeader ? '64px' : '0'
                    }"
                >
                    <transition name="page-transition">
                        <nuxt />
                    </transition>
                </a-layout-content>

                <!-- layout footer -->
                <a-layout-footer>
                    <global-footer />
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </layout-config>
</template>

<script>
    import { mapActions } from 'vuex';
    import LayoutConfig from '../components/LayoutConfig';
    import SideMenu from '../components/Menu/SideMenu';
    import GlobalHeader from '../components/GlobalHeader';
    import GlobalFooter from '../components/GlobalFooter';
    import { triggerWindowResizeEvent } from '../utils/util';
    export default {
        components: {
            SideMenu,
            GlobalHeader,
            GlobalFooter,
            LayoutConfig
        },
        data() {
            return {
                collapsed: false,
                menus: []
            };
        },
        computed: {
            contentPaddingLeft() {
                if (!this.fixSidebar || this.isMobile) {
                    return '0';
                }
                if (this.sidebarOpened) {
                    return '256px';
                }
                return '80px';
            }
        },
        watch: {
            sidebarOpened(val) {
                this.collapsed = !val;
            }
        },
        created() {
            this.collapsed = !this.sidebarOpened;
        },
        mounted() {
            const userAgent = navigator.userAgent;
            if (userAgent.includes('Edge')) {
                this.$nextTick(() => {
                    this.collapsed = !this.collapsed;
                    setTimeout(() => {
                        this.collapsed = !this.collapsed;
                    }, 16);
                });
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
                    this.collapsed = false;
                }
            },
            drawerClose() {
                this.collapsed = false;
            }
        }
    };
</script>
<style lang="scss">
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
