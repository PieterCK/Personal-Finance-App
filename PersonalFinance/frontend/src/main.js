import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'

loadFonts()
export const vuetifyTheme = createVuetify({
  theme: { defaultTheme: 'dark' },
})

