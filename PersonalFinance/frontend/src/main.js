import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import VueApexCharts from "vue3-apexcharts";
import { loadFonts } from './plugins/webfontloader'
import { createVuetify } from 'vuetify'
import ViewBankStatement from './components/ViewBankStatement/ViewBankStatement.vue'
import ViewTransactionsLabeling from './components/ViewTransactionsLabeling/ViewTransactionsLabeling.vue'
// import { create } from 'core-js/core/object'
loadFonts()
export const vuetifyTheme = createVuetify({
  theme: { defaultTheme: 'dark' },
})

if (document.querySelector('#bankstatement_view')){
  createApp(ViewBankStatement).use(vuetify).mount('#bankstatement_view')
} else if (document.querySelector('#transactionlabeling_view')){
  createApp(ViewTransactionsLabeling).use(vuetify).use(VueApexCharts).mount('#transactionlabeling_view')
}
