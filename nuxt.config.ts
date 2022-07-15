import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: ['@pinia/nuxt'],
    build: {
        postcss: {
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {}
            }
          }
        }
      },
      css: [
        "@/assets/css/tailwind.css",
    ],
    runtimeConfig: {
        public: {
          apiBase: process.env.API_BASEURL,
          apiKey: process.env.API_KEY
        }
    }

})
