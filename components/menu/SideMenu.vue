<template>
    <a-layout-sider
        :class="[
            'sider',
            isDesktop ? null : 'shadow',
            theme,
            fixSiderbar ? 'ant-fixed-sidemenu' : null
        ]"
        v-model="collapsed"
        :collapsible="collapsible"
        :trigger="null"
        width="256px"
    >
        <logo />
        <app-menu :collapsed="collapsed" :theme="theme" :mode="mode" />
        <side-menu-bottom />
    </a-layout-sider>
</template>

<script>
    import Logo from '../Tools/Logo';
    import AppMenu from './AppMenu';
    import SideMenuBottom from './SideMenuBottom';

    export default {
        name: 'SideMenu',
        components: { Logo, AppMenu, SideMenuBottom },
        props: {
            mode: {
                type: String,
                required: false,
                default: 'inline'
            },
            theme: {
                type: String,
                required: false,
                default: 'dark'
            },
            collapsible: {
                type: Boolean,
                required: false,
                default: false
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        methods: {
            onSelect(obj) {
                // this.$emit('menuSelect', obj)
            }
        }
    };
</script>
