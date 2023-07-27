<template>
    <v-snackbar
    v-model="popup"
    multi-line
    :timeout="2000"
    :transition="v-snackbar-transition"
    >
        {{text}}
    </v-snackbar>
</template>

<script>
export default {
    data(){
        return{
            popup : false,
            text: ""
        }
    },
    methods:{
        popSnackBar(barMessage){
            this.popup = true
            this.text = barMessage
        }
    }
}
</script>