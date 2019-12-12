<template>
    <client-only>
        <div class="user-wrapper">
            <div class="content-box">
                <notice-icon v-if="!isMobile && cUser" class="action" />
                <user-block v-if="cUser" />
                <user-actions v-else />
                <languages />
            </div>
        </div>
    </client-only>
</template>

<script>
    import NoticeIcon from '../Tools/NoticeIcon';
    import Languages from './Languages';
    import UserBlock from './UserBlock';
    import UserActions from './UserActions';
    export default {
        components: {
            Languages,
            UserBlock,
            UserActions,
            NoticeIcon
        }
    };
</script>
