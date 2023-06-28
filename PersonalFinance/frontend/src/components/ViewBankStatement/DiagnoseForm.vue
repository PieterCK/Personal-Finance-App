<template>
    <div id="parse_value_panel">
        <div class="w-full max-w-sm">
          <div class="overflow-x-auto">
            <table class="min-w-full rounded-lg overflow-hidden">
              <thead class="rounded bg-green-500">
                <tr >
                  <th class="py-2 px-4 bg-green-500 text-left">Bank</th>
                  <th class="py-2 px-4 bg-green-500 text-left">Known Transaction info</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b" id="parse_value_panel_bank_code">BCA</td>
                  <td class="py-2 px-4 border-b" id="parse_value_panel_transaction_info">
                    <li v-for="transaction in concatValues" :key="transaction">
                        {{ transaction }}
                      </li>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> 

    <label for="input_value" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unidentified Transactions</label>
    <textarea v-model="input_values" id="input_value" name="input_value" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g; TRSF E-BANKING DB, KR OTOMATIS, ... ,etc"></textarea>    
    <button @click="fetchData" type="submit" class="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Try Again</button>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
    data(){
        return {
            input_values: "",
        }
    },
    props:{
        parse_values: [],
    },
    computed:{
        concatValues(){
            let consolidated_parse_values = []
            let parse_value = type(this.parse_values)

            consolidated_parse_values.concat(parse_value)
            consolidated_parse_values.push(this.input_values)
            return consolidated_parse_values
        },
    },
    methods: {
        fetchData() {
            const baseUrl = process.env.VUE_APP_BASE_URL;
            const bankStatementUrl = `${baseUrl}bankstatement/api/process_bankstatement`;
            axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
            const formData = new FormData(); // Create a new FormData object

            formData.append('uploaded_file', this.input_values);

            axios.post(bankStatementUrl, formData)
            .then(response => {
                // Process the response data
                let data = response.data
                console.log(data);
            })
            .catch(error => {
                // Handle any error that occurs
                console.error(error);
            });
        }
    },
}
</script>