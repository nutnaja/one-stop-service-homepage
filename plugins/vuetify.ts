// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true, // เปิดใช้ SSR
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#E65100",
            info: "#212121",
          },
        },
      },
    },
    icons: {
      defaultSet: "mdi", 
    },
  })
  app.vueApp.use(vuetify)
})