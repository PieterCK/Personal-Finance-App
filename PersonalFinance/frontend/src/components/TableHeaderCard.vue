<template>

    <v-card
    :loading="isLoading"
    >
      <v-toolbar
        color="grey"
        height="50"
      >  
        <v-toolbar-title></v-toolbar-title>
        
        <v-spacer><VueDatePicker  v-model="date" range month-picker /></v-spacer>
        
        <v-btn 
        @click="this.sendResponse()"
        class="text-white mr-4"
        size="small"
        >
        Submit
        </v-btn>
      </v-toolbar>
    </v-card>
  
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default { 
  data(){
    return{
      date:null
    }
  },
  props:{
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['response'],
  methods:{
    sendResponse(){
      this.$emit('response', true)
    }
  },
  components: { VueDatePicker }
}
</script>
