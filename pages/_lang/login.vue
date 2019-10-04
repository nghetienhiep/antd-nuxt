<template>
    <div style="min-width: 400px; max-width: 600px;">
        <div class="top">
            <div class="header">
                <a href="/">
                    <img src="~@/assets/logo.svg" class="logo" alt="logo">
                    <span class="title">ANTD NUXT</span>
                </a>
            </div>
<!--            <div class="desc">-->

<!--            </div>-->
        </div>
        <div class="main">
            <a-form
                id="formLogin"
                class="user-layout-login"
                ref="formLogin"
                :form="form">
                <a-form-item style="margin-top:24px">
                    <a-button
                        @click="signIn"
                        size="large"
                        type="primary"
                        htmlType="submit"
                        class="login-button"
                        :loading="loginBtn"
                        :disabled="loginBtn"> {{ $t('loginWithGoogle') }}
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        layout: 'login',
        head() {
            return {
                title: 'Login: HR Enterprise Resource Planning'
            }
        },
        data() {
            return {
                loginBtn: false,
                form: this.$form.createForm(this)
            }
        },
        methods: {
            ...mapActions('auth', ['signInWithGoogle']),
            signIn() {
                this.signInWithGoogle().then(() => {
                    // this.$router.push(this.$i18n.path(''));
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top {
        text-align: center;

        .header {
            height: 44px;
            line-height: 44px;

            .badge {
                position: absolute;
                display: inline-block;
                line-height: 1;
                vertical-align: middle;
                margin-left: -12px;
                margin-top: -10px;
                opacity: 0.8;
            }

            .logo {
                height: 44px;
                vertical-align: top;
                /*margin-right: 10px;*/
                border-style: none;
            }

            .title {
                font-size: 33px;
                color: rgba(0, 0, 0, .85);
                font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
                font-weight: 600;
                position: relative;
                top: 2px;
            }
        }

        .desc {
            font-size: 14px;
            color: rgba(0, 0, 0, 0.45);
            margin-top: 12px;
            margin-bottom: 40px;
        }
    }

    .user-layout-login {
        label {
            font-size: 14px;
        }

        button.login-button {
            padding: 0 15px;
            font-size: 16px;
            height: 40px;
            width: 100%;
        }
    }
</style>
