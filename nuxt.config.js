export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Antd Nuxt',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: '/fontawesome/css/all.css'
            }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        'ant-design-vue/dist/antd.css'
    ],
    styleResources: {
        scss: [
            'assets/scss/_style.scss'
        ]
    },
    router: {
        middleware: ['i18n', 'auth']
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/antd-ui',
        '@/plugins/axios',
        '@/plugins/ssr',
        '@/plugins/mixin',
        '@/plugins/i18n',
        '@/plugins/globalComponents',
        {src: '~/plugins/init', ssr: false},
        {src: '@/plugins/no-ssr', ssr: false}
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
        "cookie-universal-nuxt"
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {

    },
    /*
    ** Build configuration
    */
    build: {
        extend(config, ctx) {
            // config.module.rules.push({
            //     enforce: 'pre',
            //     test: /\.less$/,
            //     loader: 'less-loader',
            //     options: {
            //         "modifyVars": {
            //             "primary-color": '#52C41A'
            //         },
            //         javascriptEnabled: true,
            //         cssModules: true
            //     }
            // });
        }
    }
}
