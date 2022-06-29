import { defineNuxtConfig } from 'nuxt'
import global from './utils/global'
import getSocialMeta from './utils/social-meta'
const meta = getSocialMeta(global)

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: '%s | Website',
      htmlAttrs: {
        lang: 'pt-br',
      },
      meta: [
        ...meta,
        { charset: 'utf-8', hid: 'charset' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
      ],
      link: [
        {
          rel: 'canonical',
          href: global.url,
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    },
  },

  components: [{ path: '@/components', pathPrefix: false }],

  css: ['@/assets/css/styles.css', '@/assets/app.css', '@/assets/main.css'],

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
