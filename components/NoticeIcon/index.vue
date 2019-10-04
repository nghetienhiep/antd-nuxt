<template>
    <a-popover
            v-model="visible"
            trigger="click"
            placement="bottomRight"
            overlayClassName="header-notice-wrapper"
            :getPopupContainer="() => $refs.noticeRef.parentElement"
            :autoAdjustOverflow="true"
            :arrowPointAtCenter="true"
            :overlayStyle="{ width: '400px', top: '50px' }">
        <div slot="content" style="padding: 0;">
            <a-list>
                <a-list-item v-for="notify in notifications"
                             :key="notify.id"
                             @click="onClickNotification(notify)"
                             style="padding: 10px; cursor: pointer;"
                             :style="{background: notify.read ? '#fff' : '#edf2fa'}">
                    <a-list-item-meta :title="notify.title" :description="notify.content">
                        <div slot="avatar" class="notification-avt">
                            <img v-if="notify.type === notificationType.ABSENT_REGISTER_REPLY"
                                 src="../../assets/images/send.svg" height="40" width="40"/>
                            <img v-else-if="notify.type === notificationType.ABSENT_REGISTER_INBOX"
                                 src="../../assets/images/inbox.svg" height="40" width="40"/>
                        </div>
                    </a-list-item-meta>
                    <div slot="extra" style="text-align: right">
                        <em style="font-size: 11px; color: rgb(162,162,162)">{{
                            formatTimeStampToDateTime(notify.created_at) }}</em>
                    </div>
                </a-list-item>
            </a-list>
        </div>
        <span class="header-notice" ref="noticeRef">
              <a-badge :count="count">
                <a-icon style="font-size: 16px; padding: 4px" type="bell"/>
              </a-badge>
        </span>
    </a-popover>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    import {notificationType} from '../../config/realtime'

    export default {
        name: 'HeaderNotice',
        data() {
            return {
                loadding: false,
                visible: false,
                notificationType,
                notifications: []
            }
        },
        methods: {
            onClickNotification(notify) {
                this.updateNotification({
                    id: notify.id,
                    body: {
                        read: true
                    }
                })
            }
        },
        computed: {
            count() {
                return this.notifications.filter(f => !f.read).length;
            }
        },
        mounted() {
            // this.getNotification(this.currentUser.code);
        }
    }
</script>

<style lang="scss">
    .header-notice-wrapper {
        top: 50px !important;

        .ant-popover-inner-content {
            padding: 0;

            .ant-list-item-meta-title {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            .ant-list-item-meta-description {
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }

        .ant-list-item-extra-wrap {
            width: 100%;
        }
    }
</style>
<style lang="scss" scoped>
    .header-notice {
        display: inline-block;
        transition: all 0.3s;

        span {
            vertical-align: initial;
        }
    }

    .notification-avt {
        /*border-radius: 50%;*/
        /*background-color: red;*/
        /*padding: 5px;*/
    }
</style>
