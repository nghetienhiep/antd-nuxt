<template>
    <div class="user-wrapper">
        <div class="content-box">
            <notice-icon class="action"/>
            <a-dropdown>
                <span class="action ant-dropdown-link user-dropdown-menu">
                    <img v-if="$i18n.locale === 'en'" src="../../assets/images/locales/us.svg" height="30"/>
                    <img v-else src="../../assets/images/locales/vi.svg" height="30"/>
                </span>
                <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
                    <a-menu-item key="0">
                        <a href="javascript:;" v-if="$i18n.locale === 'en'" @click="changeLanguage('vi')">
                            <img src="../../assets/images/locales/vi.svg" height="30"/>
                            <span>{{ $t('vi') }}</span>
                        </a>
                        <a v-else href="javascript:;">
                            <img src="../../assets/images/locales/vi.svg" height="30"/>
                            <span>{{ $t('vi') }}</span>
                        </a>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <a href="javascript:;" v-if="$i18n.locale === 'vi'" @click="changeLanguage('en')">
                            <img src="../../assets/images/locales/us.svg" height="30"/>
                            <span>{{ $t('en') }}</span>
                        </a>
                        <a v-else href="javascript:;">
                            <img src="../../assets/images/locales/us.svg" height="30"/>
                            <span>{{ $t('en') }}</span>
                        </a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-dropdown v-if="currentUser">
                    <span class="action ant-dropdown-link user-dropdown-menu">
                      <a-avatar class="avatar" icon="user" size="small" :src="currentUser.photoURL"/>
                      <span style="margin-left: 8px;"
                            v-if="device === 'desktop' || device === 'tablet'">{{ currentUser.fullName }}</span>
                    </span>
                <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
                    <a-menu-item key="0">
                        <a href="javascript:;">
                            <a-icon type="user"/>
                            <span>{{ $t('personalInformation') }}</span>
                        </a>
                    </a-menu-item>
                    <a-menu-divider/>
                    <a-menu-item key="3">
                        <a href="javascript:;" @click="handleLogout">
                            <a-icon type="logout"/>
                            <span>{{ $t('logout') }}</span>
                        </a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
    import NoticeIcon from '../NoticeIcon'
    import {mapActions} from 'vuex'

    export default {
        name: 'UserMenu',
        components: {
            NoticeIcon
        },
        methods: {
            ...mapActions('auth', ['signOut']),
            handleLogout() {
                const that = this;
                this.$confirm({
                    title: 'Đăng xuất',
                    content: 'Bạn có muốn đăng xuất không ?',
                    async onOk() {
                        await that.signOut();
                    },
                    onCancel() {
                    }
                })
            },
            changeLanguage(locale) {
                if (locale === 'vi') {
                    this.$router.push(this.$route.fullPath.replace(/^\/[^\/]+/, ''))
                } else {
                    this.$router.push(`/${locale}${this.$route.fullPath}`)
                }
            }
        }
    }
</script>
