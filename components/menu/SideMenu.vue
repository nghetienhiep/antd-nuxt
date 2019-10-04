<template>
    <a-layout-sider
        :class="['sider', isDesktop ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
        width="256px"
        :collapsible="collapsible"
        v-model="collapsed"
        :trigger="null">
        <logo/>
        <app-menu :collapsed="collapsed"
                  :theme="theme"
                  :mode="mode"/>
    </a-layout-sider>
</template>

<script>
    import Logo from '../tools/Logo'
    import AppMenu from './AppMenu'

    export default {
        name: 'SideMenu',
        components: {Logo, AppMenu},
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
    }
</script>
