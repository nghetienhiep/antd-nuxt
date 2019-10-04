import CookieKey from '../config/cookie'

export default async function ({app, redirect, store, route}) {
    let user = store.$cookies.get(CookieKey.USER);
    if (!user && route.fullPath !== app.i18n.path('login')) {
        redirect(app.i18n.path('login'))
    } else if (user && route.fullPath === app.i18n.path('login')) {
        redirect(app.i18n.path(''))
    }
    // let breadcrumbs = [
    //     // {
    //     //     path: app.i18n.path(''),
    //     //     title: app.i18n.t('home')
    //     // }
    // ];
    // route.meta.forEach(metadata => {
    //     if (metadata !== undefined && metadata.breadcrumb !== undefined) {
    //         breadcrumbs.push({
    //             path: app.i18n.path(route.path.substring(1)),
    //             title: app.i18n.t(metadata.breadcrumb)
    //         });
    //     }
    // });
    // store.commit('SET_BREADCRUMBS', breadcrumbs);
}
