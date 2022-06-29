import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Gabriel Caiana - Website',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },

  components: [{ path: '@/components', pathPrefix: false }],

  css: ['@/assets/css/styles.css', '@/assets/app.css'],

  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },

  buildModules: ['@nuxtjs/eslint-module', '@pinia/nuxt', '@nuxtjs/color-mode'],

  // @ts-ignore
  colorMode: {
    preference: 'dark',
    fallback: 'system',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    classSuffix: '',
  },
})
