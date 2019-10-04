<template>
    <a-form
            :form="form"
            @submit="handleSubmit">
        <a-form-item
                v-bind="formItemLayout"
                :label="$t('employeeCode')">
            <a-input
                    v-decorator="dataDecorator.employeeCode"/>
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                label="E-mail">
            <a-input
                    v-decorator="dataDecorator.email"
            />
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                :label="$t('fullName')">
            <a-input
                    v-decorator="dataDecorator.fullName"/>
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                :label="$t('phoneNumber')">
            <a-input
                    v-decorator="dataDecorator.phoneNumber"
                    style="width: 100%">
                <a-select
                        slot="addonBefore"
                        v-decorator="dataDecorator.phonePrefix"
                        style="width: 70px">
                    <a-select-option value="84">
                        +84
                    </a-select-option>
                </a-select>
            </a-input>
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                :label="$t('tags')"
        >
            <a-select
                    mode="tags"
                    v-decorator="dataDecorator.tags"
                    placeholder="Please select"
                    @select="addNewTag"
            >
                <a-select-option v-for="(tag , index) in tags" :key="tag">
                    {{tag}}
                </a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item
                v-bind="formItemLayout"
                :label="$t('dateOfBirth')">
            <a-date-picker
                    style="min-width: 200px;"
                    placeholder=""
                    v-decorator="dataDecorator.datePicker"/>
        </a-form-item>
        <a-form-item v-bind="tailFormItemLayout">
            <a-button
                    type="primary"
                    :icon="isUpdate ? 'form' : 'user-add'"
                    html-type="submit"
                    :loading="loading">
                {{ isUpdate ? $t('edit') : $t('add') }}
            </a-button>
        </a-form-item>
    </a-form>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        props: {
            isUpdate: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                loading: false,
                formItemLayout: {
                    labelCol: {
                        xs: {span: 24},
                        sm: {span: 5},
                    },
                    wrapperCol: {
                        xs: {span: 24},
                        sm: {span: 19},
                    },
                },
                tailFormItemLayout: {
                    wrapperCol: {
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 5,
                        },
                    },
                },
                form: this.$form.createForm(this)
            };
        },
        computed: {
            ...mapGetters('employee', ['employee']),
            ...mapGetters('tag', ['tags']),
            dataDecorator() {
                return {
                    employeeCode: [
                        'employeeCode',
                        {
                            initialValue: this.employee ? this.employee.EmployeeCode : '',
                            rules: [
                                {
                                    type: 'number',
                                    message: this.$t('mustBeNumeber'),
                                    transform(value) {
                                        return Number(value)
                                    },
                                }, {
                                    required: true, message: this.$t('notBeEmpty'),
                                }
                            ]
                        }
                    ],
                    email: [
                        'email',
                        {
                            initialValue: this.employee ? this.employee.Email : '',
                            rules: [{
                                type: 'email', message: this.$t('notValidEmail'),
                            }, {
                                required: true, message: this.$t('notBeEmpty'),
                            }]
                        }
                    ],
                    fullName: [
                        'fullName',
                        {
                            initialValue: this.employee ? this.employee.Fullname : '',
                            rules: [{
                                required: true, message: this.$t('notBeEmpty'),
                            }]
                        }
                    ],
                    phoneNumber: [
                        'phoneNumber',
                        {
                            initialValue: this.employee ? this.employee.PhoneNumber : '',
                            rules: [{required: false, message: this.$t('notBeEmpty')}],
                        }
                    ],
                    phonePrefix: [
                        'prefix',
                        {
                            initialValue: '84'
                        }
                    ],
                    tags: [
                        'tags',
                        {
                            initialValue: this.employee ? this.employee.Tag : [],
                        }
                    ],
                    datePicker: [
                        'datePicker',
                        {
                            rules: [{type: 'object', required: false, message: this.$t('notBeEmpty')}]
                        }
                    ],
                }
            }
        },
        methods: {
            ...mapActions('employee', ['createEmployee', 'updateEmployeeWithCode']),
            ...mapActions('tag', ['getTags', 'addNewTagToListTag']),
            addNewTag(value, option) {
                if (!this.tags.includes(value)) {
                    this.addNewTagToListTag(value);
                }
                return option
            },
            startLoading() {
                this.loading = true;
            },
            endLoading() {
                this.loading = false;
            },
            goBack() {
                if (window.history.length > 1) {
                    this.$router.go(-1)
                }
            },
            handleSubmit(e) {
                e.preventDefault();
                this.form.validateFieldsAndScroll((err, values) => {
                    if (!err) {
                        if (this.isUpdate) {
                            this.startLoading();
                            this.updateEmployeeWithCode({
                                code: this.$route.params.code,
                                body: {
                                    "EmployeeCode": values.employeeCode,
                                    "Fullname": values.fullName,
                                    "PhoneNumber": values.phoneNumber,
                                    "Email": values.email,
                                    "Tag": values.tags,
                                }
                            }).then(() => {
                                this.endLoading();
                                this.goBack();
                            })
                        } else {
                            this.startLoading();
                            this.createEmployee({
                                "EmployeeCode": values.employeeCode,
                                "Fullname": values.fullName,
                                "PhoneNumber": values.phoneNumber,
                                "Email": values.email,
                                "Tag": values.tags,
                            }).then(() => {
                                this.endLoading();
                            })


                        }
                    }
                });
            },
        },

    };
</script>
