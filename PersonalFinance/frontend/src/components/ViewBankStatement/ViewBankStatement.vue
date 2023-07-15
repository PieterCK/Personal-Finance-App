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
            parse_values:[],
            registered_periods: null
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
        },
        readServerData(){
            let input_value = this.$refs.server_data.value
            if (input_value){
                const registered_periods = JSON.parse(input_value)
                this.registered_periods = registered_periods
                this.$refs.server_data.value = null
            }
        }
    },
    mounted(){
      this.$refs.server_data ? this.readServerData(): null
  }
}
</script>