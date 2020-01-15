export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Screencasts - Learn VueJS through cool tutorials',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  env: {
    env: process.env.environment,
    stripePublicKey: process.env.stripePublicKey,
  },
  
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vuetify-datetime-picker',
    { src: "~/plugins/vue-timer", mode: 'client'},
    { src: '@/plugins/vue-shortkey.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-154843930-1'
    }],
    ['nuxt-stripe-module', {
      version: 'v3',
      //TODO: change publishableKey based on environment
      publishableKey: 'pk_test_EiveKNyPoW3C9bpmpEJXuawF' 
    }],
    '@nuxtjs/dotenv',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    ['nuxt-fontawesome', {
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000/api'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },

    transpile: ['vuetify-datetime-picker']
  },

  server: {
    port: process.env.PORT || 8000
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/sessions', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: '/sessions/user', method: 'get', propertyName: 'data.attributes' }
        },
        // tokenRequired: true,
        tokenType: '',
      },
    },
    redirect: {
      home: false,
      callback: false,
      logout: false
    }
  },
}
