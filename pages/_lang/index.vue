<template>
    <page-view style="height: 2000px" :title="$t('dashboard')">
    </page-view>
</template>

<script>

    export default {
        name: 'Dashboard',
        meta: {
            breadcrumb: 'dashboard',  // key translation
        },
        mounted() {
            console.log(this.formatTimeStampToDate(1566560387))
        }
    }
</script>

<style scoped>

</style>
