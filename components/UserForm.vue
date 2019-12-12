<template>
    <div class="sign-in-form">
        <a-row :gutter="15">
            <a-col :span="24"> </a-col>
            <a-col :span="12">
                <a-button
                    size="large"
                    type="primary"
                    block
                    style="background-color: #D74135; border-color: #D74135; "
                    ><i class="fab fa-google" style="margin-right: 10px;"></i
                    >Google</a-button
                >
            </a-col>
            <a-col :span="12">
                <a-button
                    size="large"
                    type="primary"
                    block
                    style="background-color: #34518B; border-color: #34518B;"
                    ><i
                        class="fab fa-facebook-f"
                        style="margin-right: 10px;"
                    ></i
                    >Facebook</a-button
                >
            </a-col>
        </a-row>
        <a-divider>{{ $t('or') }}</a-divider>
        <a-form :form="form" v-if="signIn">
            <a-form-item>
                <a-input
                    v-decorator="[
                        'email',
                        {
                            rules: [
                                { required: true, message: $t('notBeEmpty') },
                                { validator: checkAccount }
                            ]
                        }
                    ]"
                    :placeholder="`${$t('account')} (Email)`"
                    class="dark-input"
                    size="large"
                    ><a-icon
                        slot="prefix"
                        type="user"
                        style="color:rgba(0,0,0,.25)"
                /></a-input>
            </a-form-item>
            <a-form-item>
                <a-input-password
                    :placeholder="$t('password')"
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                { required: true, message: $t('notBeEmpty') }
                            ]
                        }
                    ]"
                    size="large"
                    class="dark-input"
                >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color:rgba(0,0,0,.25)"
                    />
                </a-input-password>
            </a-form-item>
            <a-form-item style="margin-bottom: 0;">
                <a-button
                    style="float: right;"
                    type="primary"
                    html-type="submit"
                    size="large"
                    icon="login"
                >
                    {{ $t('signIn') }}
                </a-button>
            </a-form-item>
        </a-form>
        <a-form :form="form" v-else>
            <a-form-item>
                <a-input
                    v-decorator="[
                        'email',
                        {
                            rules: [
                                { required: true, message: $t('notBeEmpty') },
                                { validator: checkAccount }
                            ]
                        }
                    ]"
                    :placeholder="`${$t('account')} (Email)`"
                    class="dark-input"
                    size="large"
                    ><a-icon
                        slot="prefix"
                        type="user"
                        style="color:rgba(0,0,0,.25)"
                /></a-input>
            </a-form-item>
            <a-form-item>
                <a-input-password
                    :placeholder="$t('password')"
                    v-decorator="[
                        'password',
                        {
                            rules: [
                                { required: true, message: $t('notBeEmpty') }
                            ]
                        }
                    ]"
                    size="large"
                    class="dark-input"
                >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color:rgba(0,0,0,.25)"
                    />
                </a-input-password>
            </a-form-item>
            <a-form-item>
                <a-input-password
                    :placeholder="$t('confirmPassword')"
                    v-decorator="[
                        'confirmPassword',
                        {
                            rules: [
                                { required: true, message: $t('notBeEmpty') }
                            ]
                        }
                    ]"
                    size="large"
                    class="dark-input"
                >
                    <a-icon
                        slot="prefix"
                        type="lock"
                        style="color:rgba(0,0,0,.25)"
                    />
                </a-input-password>
            </a-form-item>
            <a-form-item style="margin-bottom: 0;">
                <a-button
                    style="float: right;"
                    type="primary"
                    html-type="submit"
                    size="large"
                    icon="user-add"
                >
                    {{ $t('signUp') }}
                </a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
    export default {
        name: 'UserForm',
        props: {
            signIn: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                form: this.$form.createForm(this)
            };
        },
        methods: {
            async checkAccount(rule, value, callback) {}
        }
    };
</script>

<style scoped></style>
