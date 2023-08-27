<script>
import axios from 'axios';
import Cookies from 'js-cookie';
const baseUrl = process.env.VUE_APP_BASE_URL;
import TransactionsTable from './TransactionsTable.vue';
import TableHeaderCard from '../TableHeaderCard.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import PieChart from '../ViewDashboard/PieChart.vue';
import '@vuepic/vue-datepicker/dist/main.css'
import FigureCard from '../ViewDashboard/FigureCard.vue'

export default {
  data(){
    return{
      date:null,
      transactions: [],
      balance_summaries: []
    }
  },
  components:{
    TransactionsTable,
    TableHeaderCard,
    VueDatePicker,
    FigureCard,
    PieChart
  },
  methods:{
    getTransactions(){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const getTransactionsUrl = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`

      axios.get(getTransactionsUrl ,{
        params:{
            start_period:this.formatDatePeriod()[0],
            end_period:this.formatDatePeriod()[1]
        }
      })
      .then(response => {
          // Process the response data
          let data = response.data.data
          let charts = response.data.charts
          this.balance_summaries = data.balance_summaries
          this.transactions = data.transactions
          this.$refs.incomeCard.setUpFigureCard("Income", this.balance_summaries)
          this.$refs.expenseCard.setUpFigureCard("Expense", this.balance_summaries)
          this.$refs.balanceCard.setUpFigureCard("Balance", this.balance_summaries)
          console.log(charts)
          this.$refs.generalPieChart.setUpPieChart(charts.pie_chart)
          
      })
      .catch(error => {
          // Handle any error that occurs
          console.error(error);
      });
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