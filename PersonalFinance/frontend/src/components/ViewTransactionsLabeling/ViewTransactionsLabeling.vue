<script>
import axios from 'axios';
import Cookies from 'js-cookie';
const baseUrl = process.env.VUE_APP_BASE_URL;
import TransactionsTable from './TransactionsTable.vue';
import TableHeaderCard from '../TableHeaderCard.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
  data(){
    return{
      date:null
    }
  },
  components:{
    TransactionsTable,
    TableHeaderCard,
    VueDatePicker
  },
  methods:{
    getCachedTransactions(){
      axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
      const getTransactionsUrl = `${baseUrl}transactions`
      axios.get(getTransactionsUrl)
      .then(response => {
          // Process the response data
          let data = response.data
          console.log(data)
          return data
      })
      .catch(error => {
          // Handle any error that occurs
          console.error(error);
      });
    }
  }
}
</script>