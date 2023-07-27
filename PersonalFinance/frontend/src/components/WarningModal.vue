
<template>
  <div class="text-center">
    <v-dialog
      v-if="popup"
      width="auto"
    >
      <v-card>
        <v-card-text>
          {{text}}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="popup = false">Close Dialog</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        popup : false,
        text : null
      }
    },
    methods:{
      triggerModal(warningMessage){
        this.popup = true
        this.text = warningMessage
      }
    }
  }
</script>