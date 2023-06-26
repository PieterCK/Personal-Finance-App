<template>
<BankstatementForms v-if="form === 'upload_form'"/>
<DiagnoseForm v-else-if="form === 'diagnose_form'" />
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
        }
    },
    method: {

    }
}
</script>