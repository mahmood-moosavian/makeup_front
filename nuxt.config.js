export default {
  head: {
    title: 'makeup',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // runtime config
  publicRuntimeConfig: {
    apiURL: process.env.API_URL,
  },
  privateRuntimeConfig: {
    apiId: process.env.PASSPORT_CLIENT_ID,
    apiSecret: process.env.PASSPORT_CLIENT_SECRET,
  },

  css: [
    '~assets/css/global.css',
  ],

  plugins: [
    '~/plugins/checkRoutes',
    '~/plugins/mixins/validation',
    '~/plugins/axios',
    '~/plugins/loadAuthenticationData.client',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    "@nuxtjs/proxy",
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      lang: 'fa'
    }
  },

  axios: {
    proxy: true,
    // baseURL: process.env.API_URL,
  },
  proxy: {
    '/api': process.env.API_URL,
  },
  env: {
    baseUrl: 'http://' + 'localhost:3000' + '/api/v1',
    authRoutes: [
      '/crud',
      { regex: [/\/profile/.source] },
      { regex: [/\/user/.source] }
    ]
  },
  router: {
    middleware: [
      'clearValidationErrors',
      'load-auth'
    ]
  },
  build: {
  },
}
