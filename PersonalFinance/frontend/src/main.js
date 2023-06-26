import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import ViewBankStatement from './components/ViewBankStatement/ViewBankStatement.vue'
import PDFPreviewPanel from './components/ViewBankStatement/PDFPreviewPanel.vue'
// import { create } from 'core-js/core/object'
loadFonts()
export const vuetifyTheme = createVuetify({
  theme: { defaultTheme: 'dark' },
})
createApp(PDFPreviewPanel).use(vuetify).mount('#vue_pdf_viewer')
createApp(ViewBankStatement).use(vuetify).mount('#bankstatement_form')