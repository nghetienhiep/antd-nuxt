<template>
    <span>
        <div v-if="isMobile && mobileShow" class="language-mobile">
            <a-avatar
                @click="changeLanguage('vi')"
                :size="32"
                :src="
                    $i18n.locale === 'vi'
                        ? require('../../assets/images/vi-on.png')
                        : require('../../assets/images/vi-off.png')
                "
                icon="picture"
            />
            <a-avatar
                @click="changeLanguage('en')"
                :size="32"
                :src="
                    $i18n.locale === 'en'
                        ? require('../../assets/images/en-on.png')
                        : require('../../assets/images/en-off.png')
                "
                icon="picture"
            />
        </div>
        <a-dropdown
            :trigger="['click']"
            v-else-if="isDesktop || isTablet"
            placement="bottomRight"
        >
            <a-menu slot="overlay" :theme="navTheme">
                <a-menu-item
                    key="1"
                    @click="changeLanguage('vi')"
                    style="padding: 0 10px;"
                >
                    <a-avatar
                        :size="32"
                        :src="
                            $i18n.locale === 'vi'
                                ? require('../../assets/images/vi-on.png')
                                : require('../../assets/images/vi-off.png')
                        "
                        icon="picture"
                    />
                    <span
                        :class="{
                            'locale-selected': $i18n.locale === 'vi'
                        }"
                        >VI / {{ $t('vi') }}</span
                    >
                </a-menu-item>
                <a-menu-item
                    key="2"
                    @click="changeLanguage('en')"
                    style="padding: 0 10px;"
                >
                    <a-avatar
                        :size="32"
                        :src="
                            $i18n.locale === 'en'
                                ? require('../../assets/images/en-on.png')
                                : require('../../assets/images/en-off.png')
                        "
                        icon="picture"
                    />
                    <span
                        :class="{
                            'locale-selected': $i18n.locale === 'en'
                        }"
                        >EN / {{ $t('en') }}</span
                    >
                </a-menu-item>
            </a-menu>
            <span
                style="cursor: pointer; padding: 0 12px;"
                class="action ant-dropdown-link user-dropdown-menu"
            >
                <a-avatar
                    :size="32"
                    :src="
                        $i18n.locale === 'vi'
                            ? require('../../assets/images/vi-on.png')
                            : require('../../assets/images/en-on.png')
                    "
                    icon="picture"
                />
            </span>
        </a-dropdown>
    </span>
</template>

<script>
    export default {
        props: {
            mobileShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            changeLanguage(locale) {
                if (locale !== this.$i18n.locale)
                    if (locale === 'vi') {
                        this.$router.push(
                            // eslint-disable-next-line no-useless-escape
                            this.$route.fullPath.replace(/^\/[^\/]+/, '')
                        );
                    } else {
                        this.$router.push(`/${locale}${this.$route.fullPath}`);
                    }
            }
        }
    };
</script>
