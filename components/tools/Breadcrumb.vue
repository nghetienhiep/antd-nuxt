<template>
    <a-breadcrumb
        v-if="breadcrumbs.length > 0"
        class="breadcrumb"
        separator=">"
    >
        <a-breadcrumb-item>
            <nuxt-link :to="$i18n.path('')">
                <a-icon type="home" />
            </nuxt-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item
            v-for="(item, index) in breadcrumbs"
            :key="$i18n.path(item.path)"
        >
            <span v-if="index === breadcrumbs.length - 1">{{ item.name }}</span>
            <nuxt-link v-else :to="{ path: $i18n.path(item.path) }">
                {{ item.name }}
            </nuxt-link>
        </a-breadcrumb-item>
    </a-breadcrumb>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['breadcrumbs'])
        }
    };
</script>

<style scoped></style>
