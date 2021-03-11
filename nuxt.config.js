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
  env: {
    baseUrl: process.env.API_URL || 'http://localhost:3000'
  },

  css: [
    '~assets/css/global.css',
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  axios: {
    baseURL: process.env.baseUrl
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  }
}
