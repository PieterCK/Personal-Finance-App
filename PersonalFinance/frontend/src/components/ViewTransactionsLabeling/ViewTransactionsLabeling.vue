  <template>
<div class="relative overflow-x-auto">
  <v-table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-900 dark:text-gray-400">
          <tr >
              <th v-for="header in headers" :key="header.key" scope="col" class="px-6 py-3">
                  {{ header.title }}
              </th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in items" :key="item.key" class="bg-white dark:bg-gray-800">
              <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.info }}
              </th>
              <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.date }}
              </th>
              <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.entry }}
              </th>
              <th  scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.detail }}
              </th>
              <th>
                <v-input></v-input>
              </th>
          </tr>
      </tbody>
  </v-table>
</div>

  </template>
 
  <script>
  import axios from 'axios';
  import Cookies from 'js-cookie';

  const baseUrl = process.env.VUE_APP_BASE_URL;

  export default {
    data () {
      return {
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
        ]
      }
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
    },
    mounted() {
    },
    
  }
</script>
