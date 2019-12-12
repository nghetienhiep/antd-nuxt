<template>
    <client-only>
        <div class="user-wrapper">
            <div class="content-box">
                <notice-icon v-if="!isMobile && cUser" class="action" />
                <user-actions v-else-if="!isMobile && !cUser" />
                <user-block />
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
