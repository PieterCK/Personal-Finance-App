<template>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
    <input @change="updateFile" name ="uploaded_file" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
    
    <label for="bank_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Bank</label>
    <select v-model="bank_code" id="bank_code" name="bank" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
        <option>BCA</option>
        <option>BNI</option>
        <option>BTPN</option>
    </select>
  <label for="year" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
  <select v-model="year" id="year" name="year" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
    <option v-for="year in showYears" :key="year.key">{{year.name}}</option>
  </select>

    <button @click="submitForm" type="submit" class="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Extract Transactions</button>
</template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      file: null,
      bank_code: null,
      year: null
      
    };
  },
  computed:{
    showYears() {
    let currentYear = new Date().getFullYear();
    let yearSelections = [];

    for (let i = 0; i < 8; i++) {
      let year = currentYear - i;
      yearSelections.push({ key: year, name: year.toString() });
    }
    return yearSelections;
  }
  },
  emits: ['response','pdf'],
  methods: {
    updateFile(event) {
      this.file = event.target.files[0];
      this.$emit('pdf', URL.createObjectURL(this.file))
    },
    submitForm() {
      if (this.file && this.bank_code) {
        if (this.file.type !== 'application/pdf') {
          alert('Please upload a PDF file');
          return;
        }
        this.fetchData()
      } else {
        // Handle the case when no file is uploaded
        alert('Please upload a file and select a bank!');
      }
    },
    fetchData() {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        const bankStatementUrl = `${baseUrl}bankstatement/api/process_bankstatement`;
        axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
        const formData = new FormData(); // Create a new FormData object

        formData.append('uploaded_file', this.file);
        formData.append('bank', this.bank_code);
        formData.append('year', this.year)
        
        axios.post(bankStatementUrl, formData)
        .then(response => {
            // Process the response data
            let data = response.data
            console.log(data)
            if (data.redir_url){
              window.location.href = `${baseUrl}`+data.redir_url
            }else{
              this.$emit('response', data)
            }
        })
        .catch(error => {
            // Handle any error that occurs
            console.error(error);
        });
    }
  },
};
</script>