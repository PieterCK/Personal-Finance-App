<template>
    <div class="text-center ">
        <v-dialog
          v-model="popup"
          width="auto"
        >
          <v-card width="420px">
            <v-container>
              <v-card-title>
                <span color="yellow" class="text-h6">{{this.title}}</span>
              </v-card-title>
            </v-container>
            <v-card-text>
              {{this.text}}
            </v-card-text>
              <v-container>
                <v-row justify="center" align="center">
                  <v-col cols="auto">
                    <v-btn density="compact" color="primary" block @click="this.handleResp(true)">Yes</v-btn>
                  </v-col>
                  <v-col cols="auto">
                    <v-btn density="compact" color="grey" block @click="this.handleResp(false)">No</v-btn>
                  </v-col>
                </v-row>
              </v-container>
          </v-card>
        </v-dialog>
      </div>
</template>

<script>
export default {
    emits: ['response'],
    data(){
      return{
        popup: false,
        text: "",
        title: "",
        resolveFunc: null
      }
    },
    methods:{
      toggleModal(messageObj) {
        this.title = messageObj.title
        this.text = messageObj.text
        this.popup = true
      },
      handleResp(resp) {
        this.popup = false;
        this.$emit('response', resp);
      }
    }
}

</script>