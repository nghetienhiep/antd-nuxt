<template>
    <page-view>
        <template slot="extra">
            Demo
        </template>
    </page-view>
</template>

<script>
    export default {
        async fetch({ store }) {
            await store.commit('SET_BREADCRUMBS', [
                {
                    name: 'Demo',
                    path: ''
                }
            ]);
        }
    };
</script>

<style scoped></style>
