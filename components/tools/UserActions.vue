<template>
    <span>
        <a-popover
            :overlayStyle="{ width: '350px', top: '50px' }"
            trigger="click"
            placement="bottom"
        >
            <user-form slot="content" sign-in />
            <a-button type="link">{{ $t('signIn') }}</a-button>
        </a-popover>
        <a-popover
            :overlayStyle="{ width: '350px', top: '50px' }"
            trigger="click"
            placement="bottom"
        >
            <user-form slot="content" />
            <a-button type="primary" shape="round">{{ $t('signUp') }}</a-button>
        </a-popover>
    </span>
</template>

<script>
    import UserForm from '../UserForm';
    export default {
        name: 'UserActions',
        components: {
            UserForm
        }
    };
</script>

<style scoped lang="scss">
    .sign-in-form {
    }
</style>
