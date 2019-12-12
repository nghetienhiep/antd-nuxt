import notification from 'ant-design-vue/lib/notification';

export default {
    install(Vue) {
        Vue.prototype.$notification = notification;
    }
};
