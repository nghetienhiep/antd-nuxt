<template>
    <div
        :style="
            !$route.meta.hiddenHeaderContent ? 'margin: -24px -24px 0px;' : null
        "
        class="page-view"
    >
        <page-header :title="title">
            <slot slot="extra" name="extra"></slot>
            <slot slot="banner" name="headerBanner"></slot>
        </page-header>
        <div class="page-view-content">
            <div :class="{ 'main-container': !fullContent }">
                <slot>
                    <!-- keep-alive  -->
                    <nuxt ref="content" />
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from './PageHeader';
    export default {
        components: {
            PageHeader
        },
        props: {
            title: {
                type: [String, Boolean],
                default: false,
                required: false
            },
            fullContent: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
