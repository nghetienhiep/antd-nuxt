module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
        jquery: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'plugin:nuxt/recommended'
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        camelcase: ['error', { allow: ['^'] }]
    }
};
