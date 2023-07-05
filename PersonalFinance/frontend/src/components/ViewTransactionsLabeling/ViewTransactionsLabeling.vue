<script>
import axios from 'axios';
import Cookies from 'js-cookie';
const baseUrl = process.env.VUE_APP_BASE_URL;
export default {
  
  data(){
    return{
      headers:[
        {
          title:'Transaction',
          align:'start',
          sortable:false,
          key:'info'
        },
        {title:'Amount (IDR)', align:'start', sortable:true, key:'amount'},
        {title:'Date', align:'start', sortable:true, key:'date'},
        {title:'Entry', align:'start', sortable:true, key:'entry'},
        {title:'Type', align:'start', sortable:true, key:'type'},
        {title:'Detail', align:'start', sortable:false, key:'details'},
        {title:'Category', align:'start', sortable:true, key:"category"}
      ],
      items:[
        {
          amount: 10000,
          date: "17/08",
          entry: "DEBIT",
          info: 'TRANSFER REKENING',
          details: 'Beli Makan'
        }
      ],
      cached_items:null
    }
  },
  methods:{
    readRefs(){
      this.cached_items = this.$refs.ssp.innerText
      console.log(this.cached_items)
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
      // this.$refs.ssp ? this.$emit('ssp', this.$refs.ssp.innerText): null
      this.$refs.ssp ? this.readRefs(): null
  }
}
</script>