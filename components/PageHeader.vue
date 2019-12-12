<template>
    <div :class="['page-header']">
        <div class="page-header-breadcrumb">
            <div class="main-container page-header-breadcrumb-content">
                <div class="page-breadcrumbs">
                    <page-breadcrumb />
                    <h1 v-if="title" class="title" style="margin-bottom: 0;">
                        {{ title }}
                    </h1>
                    <h1
                        v-else-if="!title && lastBreadcrumbItem"
                        class="title"
                        style="margin-bottom: 0;"
                    >
                        {{ lastBreadcrumbItem.name }}
                    </h1>
                </div>
                <div v-if="this.$slots.extra" class="page-header-extra">
                    <slot name="extra"></slot>
                </div>
            </div>
        </div>
        <div v-if="$slots.banner" class="page-header-banner">
            <div class="main-container page-header-banner-content">
                <div style="background-color: #1caa65;"></div>
                <slot name="banner"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import PageBreadcrumb from './tools/Breadcrumb';

    export default {
        components: {
            PageBreadcrumb
        },
        props: {
            title: {
                type: [String, Boolean],
                default: false,
                required: false
            }
        },
        computed: {
            ...mapState(['breadcrumbs']),
            lastBreadcrumbItem() {
                return this.breadcrumbs && this.breadcrumbs.length > 0
                    ? // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                      this.breadcrumbs[this.breadcrumbs.length - 1]
                    : null;
            }
        }
    };
</script>
