<template>
    <span>
        <div v-if="mobileShow" class="notice-icon">
            <a-badge :count="count">
                <a-icon type="bell" style="font-size: 20px;" />
            </a-badge>
        </div>
        <a-popover
            v-else
            v-model="visible"
            :getPopupContainer="() => $refs.noticeRef.parentElement"
            :autoAdjustOverflow="true"
            :arrowPointAtCenter="true"
            :overlayStyle="{ width: '400px', top: '50px' }"
            overlay-class-name="header-notice-wrapper"
            trigger="click"
            placement="bottomRight"
        >
            <div slot="content" style="padding: 0;">
                <a-list :dataSource="[]"> </a-list>
            </div>
            <span ref="noticeRef" class="header-notice">
                <a-badge :count="count">
                    <a-icon
                        style="font-size: 20px; padding: 4px; margin-top: 5px;"
                        type="bell"
                    />
                </a-badge>
            </span>
        </a-popover>
    </span>
</template>

<script>
    export default {
        name: 'HeaderNotice',
        props: {
            mobileShow: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loading: false,
                visible: false,
                notifications: []
            };
        },
        computed: {
            count() {
                return this.notifications.filter((f) => !f.read).length;
            }
        },
        mounted() {
            // this.getNotification(this.currentUser.code);
        }
    };
</script>

<style lang="scss" scoped>
    .notice-icon {
        margin-top: 6px;
    }
</style>
