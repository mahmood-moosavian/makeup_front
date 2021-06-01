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
    './plugins/checkRoutes',
    './plugins/mixins/validation',
    './plugins/axios',
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  axios: {
    proxy: true,
    baseURL: process.env.API_URL,
  },
  proxy: {
    '/api': 'http://localhost:8000',//این url به دلایل امنتی از سورس حذف شده است
  },
  env: {
    authRoutes: [
      '/crud',
      { regex: [/\/profile/.source] },
      { regex: [/\/user\//.source] }
    ],
    baseUrl: 'http://' + 'localhost:3000' + '/api/v1',
  },
  router: {
    middleware: [
      'clearValidationErrors',
      'load-auth'
    ]
  },
  // proxy: {
  //   '/backend': {
  //     target: process.env.API_URL,
  //     pathRewrite: { '^/backend': '/' },
  //   },
  // },
  // auth: {
  //   redirect: {
  //     home: '/profile',
  //     login: '/login',
  //     logout: '/',
  //   },
  //   strategies: {
  //     laravelPassportPasswordGrant: {
  //       name: 'authMakeup',
  //       provider: 'laravel/passport',
  //       url: '/backend',
  //       endpoints: {
  //         token : '/api/v1/confirmCode',
  //         user:{url:'/api/v1/user', method:'get'},
  //         logout:{url: '/api/v1/logout', method: 'post'}
  //       },
  //       clientId: process.env.PASSPORT_CLIENT_ID,
  //       clientSecret: process.env.PASSPORT_CLIENT_SECRET,
  //       grantType: 'password',
  //     },
  //   },
  // },
  build: {
  }
}
