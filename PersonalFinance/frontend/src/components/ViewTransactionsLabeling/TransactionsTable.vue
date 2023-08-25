<template>
  <v-sheet
  color="grey"
  outlined
  rounded
  shaped
  elevation="24"
>
<TableHeaderCard
  @response="(msg) => msg?this.validateForm():null"
  :isLoading="this.tableIsLoading"
>
</TableHeaderCard>
<SnackBar
  ref="errorSnackbar"
></SnackBar>

<YesNoModal
  ref="loadCachedItemModal"
  @response="(msg) => msg?this.getCachedData():null"
></YesNoModal>
<YesNoModal
  ref="confirmSubmissionModal"
  @response="(msg)=>msg?this.postTransactions():null"
>
</YesNoModal>
      <v-table 
        fixed-header
        fixed-footer
        hover
        rounded
        height="500px"
      >
          <thead>
              <tr >
                <th>
                  <input
                    class="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    type="checkbox"
                    id="checkboxCheckedNoLabel"
                    value=""
                    aria-label="..."
                    v-model="selectAll" 
                    @change="toggleAllCheckboxes"
                    />
                </th>
                <th v-for="header in headers" :key="header.key" scope="col" class="px-1 py-1 font-semibold">
                    {{ header.title }}
                </th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in items" :key="item.key" class="bg-white dark:bg-gray-800">
                <td>
                  <input
                  class="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  type="checkbox"
                    id="checkboxCheckedNoLabel"
                    value=""
                    aria-label="..."
                    v-model="item.select"
                    />
                </td>
                <td  scope="row" class="px-1 text-gray-900 text-sm	font-thin dark:text-white">
                    {{ item.info }}
                </td>
                <td v-if="item.entry == 'Debit'" scope="row" class="px-1 font-bold py-1 text-sm text-rose-400 whitespace-nowrap dark:text-white">
                    - Rp {{formatPrice(item.amount)}}
                </td>
                <td v-else scope="row" class="px-1 py-1 font-semibold text-sm text-green-700 font-small whitespace-nowrap dark:text-white">
                      Rp {{formatPrice(item.amount)}}
                </td>
                <td  scope="row" class="px-1 py-1 font-small text-gray-900 text-sm whitespace-nowrap dark:text-white">
                    {{ item.date }}
                </td>
                <td  scope="row" class="px-1 py-1 font-small text-gray-900 text-sm font-weight-regular whitespace-wrap dark:text-white">
                    {{ item.details }}
                </td>
                <td >
                    <select data-te-select-init 
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      v-model="item.account_type"
                      >
                      <option v-for="category in categories" :key="category.key" :value="category.name">{{category.name}}</option>
                    </select>
                </td>
              </tr>
          </tbody>
      </v-table>
</v-sheet>
</template>

<script>
  import axios from 'axios';
  import Cookies from 'js-cookie';
  import {toRaw} from 'vue'
  import YesNoModal from '../YesNoModal.vue';
  import TableHeaderCard from '../TableHeaderCard.vue';
  import SnackBar from '../SnackBar.vue';

  const baseUrl = process.env.VUE_APP_BASE_URL;

  export default {
    components:{
      YesNoModal,
      TableHeaderCard,
      SnackBar,
    },
    data () { 
      return {
        attrs:{
          class: 'mb-6',
          boilerplate: true,
          elevation: 2,
        },
        dialog:false,
        formIsValid:true,
        headers:[
          {
            title:'Transaction',
            align:'start',
            sortable:false,
            key:'info'
          },
          {title:'Amount (IDR)', align:'start', sortable:true, key:'amount'},
          {title:'Date', align:'start', sortable:true, key:'date'},
          {title:'Detail', align:'start', sortable:false, key:'details'},
          {title:'Category', align:'start', sortable:true, key:"category"},
        ],
        items:[],
        selectedItems:[],
        categories:[],
        selectAll:false,
        yesNoModalObj:{
          trigger:false,
          dialog:{
            title: "New Transactions",
            text: "Looks like you just uploaded a bankstatement, want to label transactions from that bankstatement?"
          }
        },
        snackBarObj:{
          trigger:false,
          dialog:"Please select and label transactions first!",
        },
        tableIsLoading:false,
        balance_summary:[]
      }
    },
    props:{
        cached_transactions_data:null,
        account_types:null,
        cached_summary:[],
        transactions:[]
    },
    methods:{
      postTransactions(){
        axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
        const CRUDBankstatementAPI = `${baseUrl}bankstatement/api/CRUDBankstatementAPI`

        axios.post(CRUDBankstatementAPI, {
          transactions:this.selectedItems,
          balance_summary:this.getBalanceSummary(this.selectedItems)
        })
        .then(response => {
            // Process the response data
            this.tableIsLoading = false
            let data = response.data
            console.log(data)
            return data
        })
        .catch(error => {
            // Handle any error that occurs
            this.tableIsLoading = false
            console.error(error);
        });
      },
      toggleAllCheckboxes() {
        this.items.forEach(item => {
          item.select = this.selectAll;
        });
      },
      getBalanceSummary(selectedItems){
        let period_keys = []
        let balance_summaries = []
        let tmp_balance_summary = toRaw(this.balance_summary)
        
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
      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      processCategorySelect(account_types){
        let categories = [{key:null, name:null}]
        account_types.forEach(category=> 
          categories.push({
              key:category, 
              name:category
          })
        )
        this.categories = categories
      },
      getCachedData(){
        this.items = this.cached_transactions_data
        this.balance_summary = this.cached_summary
      },
      validateForm(){
        this.tableIsLoading = true
        let safeToSubmit = false
        this.selectedItems = []

        const NO_ITEM_SELECTED = this.items.filter((item)=>item.select).length < 1
        const NO_ITEM = this.items.length < 1
        if (NO_ITEM || NO_ITEM_SELECTED){
          this.$refs.errorSnackbar.popSnackBar("Please Selecet or Load Transactions First!")
          this.tableIsLoading = false
          return
        }
        
        this.items.forEach((item)=>{
          if (item.select){
            this.selectedItems.push(item)
            item.error = !item.account_type
            safeToSubmit = item.account_type
          }
        })
        
        if (!safeToSubmit){
          this.$refs.errorSnackbar.popSnackBar("Please Complete Labeling Your Transactions")
          this.tableIsLoading = false
        }
        else if (this.selectedItems.length < this.items.length && safeToSubmit){
          this.$refs.confirmSubmissionModal.toggleModal({
            "title":"Confirm Submission!",
            "text":"You haven't selected all of the items yet! Are you sure you want to submit the selected items?"
          })
        } 
        else{
          this.$refs.confirmSubmissionModal.toggleModal({
            "title":"Confirm Submission!",
            "text":"Looks good! Click 'yes' to save."
          })
        }
      }
    },
    watch:{
      transactions(){
        this.$refs.errorSnackbar.popSnackBar("Loading data to table...")
        this.items = this.transactions
      }
    },
    mounted(){
      this.cached_transactions_data ? this.$refs.loadCachedItemModal.toggleModal({
        "title":"New Transactions",
        "text":"Would you like to load and label the newly uploaded transactions?"
      }):null
      this.processCategorySelect(this.account_types)
    }
  }
</script>