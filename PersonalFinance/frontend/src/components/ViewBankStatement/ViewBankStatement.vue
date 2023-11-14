<template>
    <PDFPreviewPanel :pdf_url="file_url"></PDFPreviewPanel>
    <div class="flex-column">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
        <input @change="updateFile" name ="uploaded_file" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
        <v-overlay v-model="overlay">
        </v-overlay>
        <label for="bank_code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Bank</label>
        <select v-model="bank_code" id="bank_code" name="bank" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
            <option>BCA</option>
            <option>BNI</option>
            <option>BTPN</option>
        </select>
        <button @click="submitForm" type="submit" class="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Extract Transactions</button>    
    </div>
    <SnackBar ref="errorSnackBar"/>
  </template>

<script>
import axios from 'axios';
import Cookies from 'js-cookie';
import SnackBar from '../SnackBar.vue'
import PDFPreviewPanel from './PDFPreviewPanel.vue';

export default {
  data() {
    return {
      file: null,
      bank_code: null,
      overlay: false,
      file_url: null      
    };
  },
  components:{
    SnackBar,
    PDFPreviewPanel
  },
  methods: {
    updateFile(event) {
      this.file = event.target.files[0];
      this.file_url = URL.createObjectURL(this.file)
    },
    submitForm() {
      if (this.file && this.bank_code) {
        if (this.file.type !== 'application/pdf') {
          this.$refs.errorSnackBar.popSnackBar("Please upload a PDF type file")
          return;
        }
        this.overlay = true
        this.fetchData()
      } else {
        this.$refs.errorSnackBar.popSnackBar("Please select a File")
      }
    },
    fetchData() {
        const baseUrl = process.env.VUE_APP_BASE_URL;
        const bankStatementUrl = `${baseUrl}bankstatement/api/process_bankstatement`;
        axios.defaults.headers.common['X-CSRFToken'] = Cookies.get('csrftoken');
        const formData = new FormData(); // Create a new FormData object

        formData.append('uploaded_file', this.file);
        formData.append('bank', this.bank_code);
        
        axios.post(bankStatementUrl, formData)
        .then(response => {
            // Process the response data
            let data = response.data
            this.overlay = false
            if (data.redir){
              this.$refs.errorSnackBar.popSnackBar("Redirecting...")
              window.location.href = `${baseUrl}`+data.redir
            }else if(data.error){
              this.$refs.errorSnackBar.popSnackBar(data.error)
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