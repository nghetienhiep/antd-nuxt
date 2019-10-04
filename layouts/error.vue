<template>
    <page-404 v-if="error.statusCode === 404"/>
    <page-403 v-else-if="error.statusCode === 403"/>
    <page-500 v-else-if="error.statusCode === 500"/>
</template>

<script>
    export default {
        props: ['error']
    }
</script>
