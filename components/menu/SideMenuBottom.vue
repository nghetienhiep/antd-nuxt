<template>
    <div class="side-menu-bottom">
        <languages v-if="isMobile" mobile-show />
        <notice-icon mobile-show />
    </div>
</template>

<script>
    import Languages from '../Tools/Languages';
    import NoticeIcon from '../Tools/NoticeIcon';
    export default {
        name: 'SideMenuBottom',
        components: {
            NoticeIcon,
            Languages
        }
    };
</script>

<style scoped lang="scss">
    .side-menu-bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
    }
</style>
<style lang="scss">
    .light {
        .side-menu-bottom {
            border-top: 1px solid #e8e8e8;
        }
    }
    .dark {
        .side-menu-bottom {
            border-top: 1px solid $border-dark;
        }
    }
</style>
