<template>
    <a-menu
        :defaultSelectedKeys="defaultKey"
        :defaultOpenKeys="defaultOpenKey"
        :mode="mode"
        :theme="theme"
        :collapsed="collapsed"
    >
        <a-menu-item key="/" @click="handleClick('')">
            <a-icon type="dashboard" />
            <span>{{ $t('dashboard') }}</span>
        </a-menu-item>
    </a-menu>
</template>

<script>
    // eslint-disable-next-line no-useless-escape
    const regex = /^\/[^\/]+/;
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
        data() {
            return { defaultKey: [this.$route.fullPath.replace(regex, '')] };
        },
        computed: {
            defaultOpenKey() {
                if (this.layoutMode === 'topmenu') return [];
                else {
                    const path = this.$route.path;
                    const index = path.lastIndexOf('/');
                    if (index > 0) {
                        const key = path.substring(0, index);
                        return [key];
                    } else {
                        return [];
                    }
                }
            }
        },
        watch: {
            '$route.path': {
                handler(val) {
                    this.defaultKey = [val.replace(regex, '')];
                },
                deep: true
            }
        },
        methods: {
            handleClick(path) {
                this.$router.push(this.$i18n.path(path));
            }
        }
    };
</script>

<style scoped></style>
