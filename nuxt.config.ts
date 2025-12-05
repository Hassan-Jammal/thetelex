// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: ['@nuxtjs/tailwindcss'],
  
  css: ['~/assets/css/globals.css'],
  
  app: {
    head: {
      title: 'The Telex - International News',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'The Telex - Breaking news, latest stories, and in-depth coverage from around the world' 
        }
      ],
    }
  },

  compatibilityDate: '2025-12-05'
})
