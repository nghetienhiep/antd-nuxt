<template>
    <a-menu
            :defaultSelectedKeys="defaultKey"
            :defaultOpenKeys="defaultOpenKey"
            :mode="mode"
            :theme="theme"
            :collapsed="collapsed">
        <a-menu-item :key="$i18n.path('')" @click="handleClick('')">
            <a-icon type="dashboard"/>
            <span>{{ $t('dashboard') }}</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                required: false,
                default: 'dark'
            },
            mode: {
                type: String,
                required: false,
                default: 'inline'
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        computed: {
            defaultKey() {
                return [this.$route.path]
            },
            defaultOpenKey() {
                if (this.layoutMode === 'topmenu') return [];
                else {
                    const path = this.$route.path;
                    const index = path.lastIndexOf("/");
                    if (index > 0) {
                        let key = path.substring(0, index);
                        return [key]
                    } else {
                        return []
                    }
                }
            }
        },
        methods: {
            handleClick(path) {
                this.$router.push(this.$i18n.path(path))
            }
        }
    }
</script>

<style scoped>

</style>
