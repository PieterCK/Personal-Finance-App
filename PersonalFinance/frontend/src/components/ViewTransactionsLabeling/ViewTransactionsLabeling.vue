<script>
import axios from 'axios';
import Cookies from 'js-cookie';
const baseUrl = process.env.VUE_APP_BASE_URL;
import TransactionsTable from './TransactionsTable.vue';
export default {
  
  data(){
    return{
      cached_items:null
    }
  },
  components:{
    TransactionsTable
  },
  methods:{
    readServerData(){
      let input_value = this.$refs.server_data.value
      console.log("input value: ", input_value)
      const cached_items = JSON.parse(input_value)
      this.cached_items = cached_items
      this.$refs.server_data.value = null
    },
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
  },
  mounted(){
      this.$refs.server_data ? this.readServerData(): null
  }
}
</script>