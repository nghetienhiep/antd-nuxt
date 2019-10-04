<template>
    <div class="logo">
        <nuxt-link :to="$i18n.path('')">
            <img src="../../assets/logo.svg"/>
            <h1 v-if="showTitle">{{ title }}</h1>
        </nuxt-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        props: {
            title: {
                type: String,
                default: 'ANTD NUXT',
                required: false
            },
            showTitle: {
                type: Boolean,
                default: true,
                required: false
            }
        }
    }
</script>
