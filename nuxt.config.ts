import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
 extends: '@nuxt-themes/something' , 
  build: {
    transpile: ['vuetify'],
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    "@/assets/css/global.css",
    "@/assets/css/main.css",
  ],
  app: {
    head: {
      title: 'G-ONE Tire Shop',
      meta: [
        { name: 'description', content: 'G-ONE บริการยางรถยนต์และอุปกรณ์รถยนต์ครบวงจร' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  compatibilityDate: '2025-02-25',
})