<template>
    <span>
        <a-dropdown v-if="cUser" :trigger="['click']" placement="bottomRight">
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
            <div class="action ant-dropdown-link user-dropdown-menu">
                <a-avatar
                    :size="28"
                    class="avatar"
                    icon="user"
                    style="margin-bottom: 16px;"
                />
                <strong
                    v-if="device === 'desktop' || device === 'tablet'"
                    style="margin-left: 8px;"
                >Nghê Tiến Hiệp</strong
                >
            </div>
        </a-dropdown>
        <span v-else-if="isMobile" style="padding: 0 7px">
            <a-avatar
                :size="32"
                class="avatar"
                icon="user"
                style="margin-top: -5px;"
            />
        </span>
    </span>
</template>

<script>
  export default {
    name: 'UserBlock'
  };
</script>

<style scoped></style>
