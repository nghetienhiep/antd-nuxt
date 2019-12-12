<template>
    <client-only>
        <div class="user-wrapper">
            <div class="content-box">
                <notice-icon v-if="!isMobile" class="action" />
                <a-dropdown :trigger="['click']" placement="bottomRight">
                    <a-menu
                        slot="overlay"
                        :theme="navTheme"
                        class="user-dropdown-menu-wrapper"
                    >
                        <a-menu-item key="personal-information">
                            <a-icon type="user" />
                            <span>{{ $t('personalInformation') }}</span>
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="sign-out" class="user-sign-out">
                            <a-icon type="logout" />
                            <span>{{ $t('signOut') }}</span>
                        </a-menu-item>
                    </a-menu>
                    <span class="action ant-dropdown-link user-dropdown-menu">
                        <a-avatar :size="28" class="avatar" icon="user" />
                        <strong
                            v-if="device === 'desktop' || device === 'tablet'"
                            style="margin-left: 8px;"
                            >Nghê Tiến Hiệp</strong
                        >
                    </span>
                </a-dropdown>
                <languages />
            </div>
        </div>
    </client-only>
</template>

<script>
    import NoticeIcon from '../Tools/NoticeIcon';
    import Languages from './Languages';
    export default {
        components: {
            Languages,
            NoticeIcon
        }
    };
</script>
