<template>
<v-sheet
  color="white"
  outlined
  rounded
  shaped
  elevation="24"
>
  <div class="text-center ">
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card width="420px">
        <v-container>
          <v-card-title>
            <span color="yellow" class="text-h6">We got new transactions!</span>
          </v-card-title>
        </v-container>
        <v-card-text>
          Looks like you just uploaded a bankstatement, want to label transactions from that bankstatement?
        </v-card-text>
          <v-container>
            <v-row justify="center" align="center">
              <v-col cols="auto">
                <v-btn density="compact" color="primary" block @click="getCachedTransactions">Yes</v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn density="compact" color="grey" block @click="dialog = false">No</v-btn>
              </v-col>
            </v-row>
          </v-container>
      </v-card>
    </v-dialog>
  </div>

  <div class="relative overflow-x-auto shadow-md sm:rounded-xl">
    <v-table 
      density="compact" 
      fixed-header
      fixed-footer
      hover
      rounded
      height="500px"
    >
        <thead  class="text-m text-gray-900 dark:text-gray-400">
            <tr >
              <th>
                <input
                  class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  id="checkboxCheckedNoLabel"
                  value=""
                  aria-label="..."
                  v-model="selectAll" 
                  @change = "toggleAllCheckboxes"
                  />
              </th>
              <th v-for="header in headers" :key="header.key" scope="col" class="px-6 py-3 font-medium text-black-900 whitespace-nowrap dark:text-white">
                  {{ header.title }}
              </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.key" class="bg-white dark:bg-gray-800">
              <td>
                <input
                  class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                  type="checkbox"
                  id="checkboxCheckedNoLabel"
                  value=""
                  aria-label="..."
                  v-model="item.select"
                  />
              </td>
              <td  scope="row" class="px-2 font-small text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.info }}
              </td>
              <td v-if="item.entry == 'Debit'" scope="row" class="px-1 font-bold py-1 font-small text-rose-400 whitespace-nowrap dark:text-white">
                  - Rp {{formatPrice(item.amount)}}
              </td>
              <td v-else scope="row" class="px-1 py-1 font-semibold text-green-700 font-small whitespace-nowrap dark:text-white">
                    Rp {{formatPrice(item.amount)}}
              </td>
              <td  scope="row" class="px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white">
                  {{ item.date }}
              </td>
              <td  scope="row" class="px-1 py-1 font-small text-gray-900 whitespace-wrap dark:text-white">
                  {{ item.details }}
              </td>
              <td >
                  <select data-te-select-init 
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option v-for="category in categories" :key="category.key">{{category.name}}</option>
                  </select>
              </td>
              <td scope="row" class="text-center px-1 py-1 font-small text-gray-900 whitespace-nowrap dark:text-white">
                <v-chip
                  class="ma-2"
                >
                  Not Saved
                </v-chip>
              </td>
            </tr>
        </tbody>
    </v-table>
  </div>
</v-sheet>
</template>

<script>
  import axios from 'axios';
  import Cookies from 'js-cookie';
  const baseUrl = process.env.VUE_APP_BASE_URL;

  export default {
    data () { 
      return {
        attrs:{
          class: 'mb-6',
          boilerplate: true,
          elevation: 2,
        },
        dialog:false,
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
          {title:'Status', align:'start', sortable:true, key:"status"},
        ],
        items:false,
        categories:[
          {
            key:"food", 
            name:"Food"
          },
          {key:"entertainment", name:"Entertainment"},
          {key:"transport", name:"Transport"}
        ],
        selectAll:false,
      }
    },
    props:{
        cached_items:null
    },
    methods:{
      getTransaction(){
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
      },
      getCachedTransactions(){
        this.items = this.cached_items
        this.dialog = false
      },
      toggleAllCheckboxes() {
        this.items.forEach(item => {
          item.select = this.selectAll;
        });
      },
      formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      }
    },
    watch:{
      cached_items(cached_items){
        cached_items ? this.dialog = true : this.dialog = false
      },
    }
  }
</script>