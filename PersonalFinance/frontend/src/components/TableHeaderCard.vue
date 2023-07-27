<template>
  <v-card
    title="Transaction Labeling"
    max-height="144"
    :loading = "isLoading"
    class="rounded-none"
    variant="flat"
  >
    <v-card-actions class="flex flex-row-reverse">
      <div >
        <v-btn 
          @click="this.sendResponse()"
          variant="flat"
          class="text-white"
          color="#5865f2"
          size="small"
        >Submit</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default { 
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
  }
}
</script>
