<script>
import axios from 'axios';
import Cookies from 'js-cookie';
const baseUrl = process.env.VUE_APP_BASE_URL;
import TransactionsTable from './TransactionsTable.vue';
import TableHeaderCard from '../TableHeaderCard.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import PieChart from '../ViewDashboard/PieChart.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import FigureCard from '../ViewDashboard/FigureCard.vue';
import YesNoModal from '../YesNoModal.vue';
import {toRaw} from 'vue'
import SnackBar from '../SnackBar.vue';

export default {
  data(){
    return{
      date:null,
      transactions: [],
      balance_summaries: {},
      overlay:false,
      main_table_headers:[
          {title:'Date', align:'start', sortable:true, key:'date'},
          {
            title:'Transaction',
            align:'start',
            sortable:false,
            key:'info'
          },
          {title:'Entry', align:'start', sortable:true, key:'entry'},
          {title:'Amount', align:'start', sortable:true, key:'amount'},
          {title:'Detail', align:'start', sortable:false, key:'details'},
          {title:'Category', align:'start', sortable:true, key:"category"},
        ]
    }
  },
  components:{
    TransactionsTable,
    TableHeaderCard,
    VueDatePicker,
    FigureCard,
    PieChart,
    YesNoModal,
    SnackBar
  },
  methods:{
    getTransactions(startPeriod = null, endPeriod = null){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const getTransactionsUrl = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`
      const params = {};

      if (startPeriod !== null && endPeriod !== null) {
        params.start_period = startPeriod;
        params.end_period = endPeriod;
      } else {
        const datePeriod = this.formatDatePeriod();
        params.start_period = datePeriod[0];
        params.end_period = datePeriod[1];
      }
      console.log("param: ", params)
      axios
      .get(getTransactionsUrl, { params })
      .then(response => {
          // Process the response data
          let data = response.data.data
          let charts = response.data.charts
          this.balance_summaries = data.balance_summaries
          this.transactions = data.transactions
          console.log("balance summaries: ", data.balance_summaries)
          this.$refs.incomeCard.setUpFigureCard("Income", this.balance_summaries)
          this.$refs.expenseCard.setUpFigureCard("Expense", this.balance_summaries)
          this.$refs.balanceCard.setUpFigureCard("Balance", this.balance_summaries)
          this.$refs.generalPieChart.setUpPieChart(charts.pie_chart)
          
      })
      .catch(error => {
          // Handle any error that occurs
          console.error(error);
      });
    },
    updateItem(updatedItem) {
      const index = this.transactions.findIndex(item => item.pk === updatedItem.pk);
      if (index !== -1) {
        this.transactions.splice(index, 1, updatedItem);
      }
    },
    postTransactions(selected_items){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const CRUDBankstatementAPI = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`
      this.overlay = true
      axios.post(CRUDBankstatementAPI, {
        transactions: selected_items,
        balance_summary:this.getBalanceSummary(selected_items)
      })
      .then(response => {
          // Process the response data
          let data = response.data
          this.overlay = false
          if ('error' in data){
            this.$refs.errorSnackbar.popSnackBar(data.error)
          }else{
            this.$refs.errorSnackbar.popSnackBar(data.success)
          }
          this.getTransactions()     
      })
      .catch(error => {
          // Handle any error that occurs
          console.error(error);
      });
    },
    putTransactions(selected_items){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const CRUDBankstatementAPI = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`
      this.overlay = true
      axios.put(CRUDBankstatementAPI, {
        transactions: selected_items,
      })
      .then(response => {
          // Process the response data
          let data = response.data
          this.overlay = false
          if ('error' in data){
            this.$refs.errorSnackbar.popSnackBar(data.error)
          }else{
            this.$refs.errorSnackbar.popSnackBar(data.success)
          }
          this.getTransactions()     
      })
      .catch(error => {
          // Handle any error that occurs
          console.error(error);
      });
    },
    deleteTransactions(selected_items){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const CRUDBankstatementAPI = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`
      this.overlay = true
      axios.delete(CRUDBankstatementAPI, {
        transactions:selected_items,
        balance_summary:this.getBalanceSummary(selected_items)
      })
      .then(response => {
          // Process the response data
          this.tableIsLoading = false
          let data = response.data
          this.overlay = false
          if ('error' in data){
            this.$refs.errorSnackbar.popSnackBar(data.error)
          }else{
            this.$refs.errorSnackbar.popSnackBar(data.success)
          }
          this.getTransactions()            
      })
      .catch(error => {
          // Handle any error that occurs
          this.tableIsLoading = false
          console.error(error);
      });
    },
    getBalanceSummary(selectedItems){
      let period_keys = []
      let balance_summaries = []
      let tmp_balance_summary = toRaw(this.balance_summaries)
      
      for(const element of selectedItems){
        let tmp_date = element.date.split('-')
        let item_period_key = `${tmp_date[1]}-${tmp_date[2]}`

        if (!period_keys.includes(item_period_key)){
          period_keys.push(item_period_key)
          balance_summaries.push(tmp_balance_summary[item_period_key])
        }
      }
      return balance_summaries
    },
    formatDatePeriod(){
      let start_date = this.date[0]
      let end_date = this.date[1]?this.date[1]:this.date[0]
      let start_period = `${start_date.month}-${start_date.year}`
      let end_period = `${end_date.month}-${end_date.year}`
      return [start_period, end_period]
    },
  }
}
</script>