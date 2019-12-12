<template>
    <div class="logo">
        <nuxt-link :to="$i18n.path('')" style="height: 100%;">
            <div
                :style="{ marginTop: isMobile ? '-2px' : '0' }"
                class="custom-logo"
            >
                <img
                    alt="u Code"
                    src="../../assets/images/logo-128.png"
                    style="height: 100%;"
                />
            </div>
        </nuxt-link>
    </div>
</template>
<style lang="scss">
    .custom-logo {
        text-align: center;
    }
</style>
