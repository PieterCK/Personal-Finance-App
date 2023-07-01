<template>
    <PDFPreviewPanel :pdf_url="pdf_url"/>
    <form @submit.prevent enctype="multipart/form-data">
        <BankstatementForms 
            @response="(msg) => handleResponse(msg)" 
            @pdf="(url) => pdf_url = url" 
            v-if="form === 'upload_form'"
        />
        <DiagnoseForm
            @response="(msg) => handleResponse(msg)" 
            :parse_values="parse_values"    
            v-else-if="form === 'diagnose_form'" 
        />
    </form>
</template>

<script>
import BankstatementForms from './BankstatementForms.vue';
import DiagnoseForm from './DiagnoseForm.vue';
import PDFPreviewPanel from './PDFPreviewPanel.vue';

const baseUrl = process.env.VUE_APP_BASE_URL;

export default {
    components:{
        BankstatementForms,
        DiagnoseForm,
        PDFPreviewPanel
    },
    data(){
        return {
            form : "upload_form",
            is_valid: true,
            pdf_url:"",
            transaction_data:"",
            parse_values:[]
        }
    },
    watch: {
        is_valid(is_valid) {
            if(is_valid){
                this.form = "upload_form"
                this.pdf_url = `${baseUrl}bankstatement/api/display_pdf/original`;
            } else{
                this.form = "diagnose_form"
                this.pdf_url = `${baseUrl}bankstatement/api/display_pdf/highlighted`;
            }
        }
    },
    methods: {
        handleResponse(msg){
            this.is_valid = msg.transaction_data.is_valid
            this.parse_values = msg.transaction_data.parse_value
        }
    }
}
</script>