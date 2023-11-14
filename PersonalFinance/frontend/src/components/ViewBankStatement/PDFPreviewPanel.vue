<template>
<v-sheet
    color="white"
    elevation="24"
    outlined
    rounded
    shaped
>
<div class="embed-responsive embed-responsive-21by9 pdf_preview border rounded-lg focus:shadow-outline rounded" id="pdf_preview">
    <embed v-bind:src="pdf_url" width="650px" height="550px" class="rounded-lg" type="application/pdf">
</div>
</v-sheet>
</template>

<script>
export default {
    props: {
        pdf_url: null,
    }
}
</script>