<template>
    <a-breadcrumb class="breadcrumb" v-if="breadcrumbs.length > 1">
        <a-breadcrumb-item>
            <nuxt-link
                :to="$i18n.path('')">
                <a-icon type="home"/>
            </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-for="(item, index) in breadcrumbs.slice(0, breadcrumbs.length - 1)" :key="item.path">
            <nuxt-link
                :to="{path: item.path}">
                {{ item.title }}
            </nuxt-link>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters(['breadcrumbs'])
        }
    }
</script>

<style scoped>
</style>
