module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: '/fontawesome/css/all.css'
            }
        ],
        script: [
            {
                src:
                    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
                crossorigin: 'anonymous'
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#1caa4d' },
    /*
     ** Global CSS
     */
    css: [
        'assets/fonts/style.css',
        { src: 'ant-design-vue/dist/antd.less', lang: 'less' }
    ],
    styleResources: {
        scss: ['assets/scss/_style.scss']
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
        '@/plugins/init',
        '@/plugins/mixin',
        '@/plugins/i18n',
        '@/plugins/global-components',
        { src: '@/plugins/global-components', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
        'cookie-universal-nuxt'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        loaders: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    'primary-color': '#1caa4d'
                }
            }
        },
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    }
};
