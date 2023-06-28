import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import ViewBankStatement from './components/ViewBankStatement/ViewBankStatement.vue'
// import { create } from 'core-js/core/object'
loadFonts()
export const vuetifyTheme = createVuetify({
  theme: { defaultTheme: 'dark' },
})
createApp(ViewBankStatement).use(vuetify).mount('#bankstatement_view')