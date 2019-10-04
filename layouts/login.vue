<template>
    <a-locale-provider :locale="$i18n.locale === 'vi' ? vi_VN : en_US">
        <div id="userLayout" :class="['user-layout-wrapper', device]">
            <div class="container">
                <nuxt/>
                <div class="footer">
                    <!--                <div class="links">-->
                    <!--                </div>-->
                    <div class="copyright">
                        Copyright &copy; 2019
                    </div>
                </div>
            </div>
        </div>
    </a-locale-provider>
</template>

<script>
    import vi_VN from 'ant-design-vue/lib/locale-provider/vi_VN';
    import en_US from 'ant-design-vue/lib/locale-provider/en_US';

    export default {
        name: 'UserLayout',
        data() {
            return {
                vi_VN,
                en_US
            }
        },
        mounted() {
            document.body.classList.add('userLayout')
        },
        beforeDestroy() {
            document.body.classList.remove('userLayout')
        }
    }
</script>

<style lang="scss" scoped>
    #userLayout {
        height: 100vh;
    }


    #userLayout.user-layout-wrapper {
        /*height: 100%;*/

        &.mobile {
            .container {
                .main {
                    max-width: 368px;
                    width: 98%;
                }
            }
        }

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 100%;
            background: #f0f2f5 url(~@/assets/background.svg) no-repeat 50%;
            background-size: 100%;
            padding: 110px 0 144px;
            position: relative;

            a {
                text-decoration: none;
            }

            .main {
                min-width: 260px;
                width: 368px;
                margin: 0 auto;
            }

            .footer {
                position: absolute;
                width: 100%;
                bottom: 0;
                padding: 0 16px;
                margin: 48px 0 24px;
                text-align: center;

                .links {
                    margin-bottom: 8px;
                    font-size: 14px;

                    a {
                        color: rgba(0, 0, 0, 0.45);
                        transition: all 0.3s;

                        &:not(:last-child) {
                            margin-right: 40px;
                        }
                    }
                }

                .copyright {
                    color: rgba(0, 0, 0, 0.45);
                    font-size: 14px;
                }
            }
        }
    }
</style>
