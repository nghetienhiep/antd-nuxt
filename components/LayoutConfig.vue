<template>
    <a-locale-provider :locale="$i18n.locale === 'vi' ? vi_VN : en_US">
        <slot></slot>
    </a-locale-provider>
</template>

<script>
    import moment from 'moment';
    import vi_VN from 'ant-design-vue/lib/locale-provider/vi_VN';
    import en_US from 'ant-design-vue/lib/locale-provider/en_US';
    export default {
        data() {
            return {
                en_US,
                vi_VN
            };
        },
        created() {
            moment.locale(this.$i18n.locale);
        },
        mounted() {
            $('body')
                .addClass(this.layoutMode)
                .addClass(this.navTheme);
        }
    };
</script>

<style lang="scss">
    @import '../assets/scss/theme/global';
</style>
