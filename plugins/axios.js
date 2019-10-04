import CookieKey from '../config/cookie'

export default function ({app, $axios, redirect, store}) {
    // $axios.onRequest(config => {
    //     let accessToken = store.$cookies.get(CookieKey.ACCESS_TOKEN);
    //     if (accessToken) {
    //         config.headers.common['access-token'] = accessToken
    //     } else {
    //         redirect(app.i18n.path('login'))
    //     }
    // });
    //
    // $axios.onError(error => {
    //     let data = {
    //         code: error.response.status
    //     };
    //     store.dispatch('checkApiCode', {data, from: 'axios'}, {root: true});
    // })
}
