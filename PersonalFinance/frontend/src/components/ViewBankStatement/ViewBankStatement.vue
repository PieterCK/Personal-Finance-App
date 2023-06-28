<template>
    <form @submit.prevent enctype="multipart/form-data">
        <BankstatementForms @response="(msg) => is_valid = msg" v-if="form === 'upload_form'"/>
        <DiagnoseForm v-else-if="form === 'diagnose_form'" />
    </form>
</template>

<script>
import BankstatementForms from './BankstatementForms.vue';
import DiagnoseForm from './DiagnoseForm.vue';

export default {
    components:{
        BankstatementForms,
        DiagnoseForm
    },
    data(){
        return {
            form : "upload_form",
            is_valid: true
        }
    },
    watch: {
        is_valid(is_valid) {
            if(is_valid){
                this.form = "upload_form"
            } else{
                this.form = "diagnose_form"
            }
        }
  }
}
</script>