<template>
<v-sheet
    color="white"
    elevation="24"
    height="470"
    outlined
    rounded
    shaped
    width="380"
>
<div class="embed-responsive embed-responsive-21by9 pdf_preview border rounded-lg focus:shadow-outline rounded" id="pdf_preview">
    <embed v-bind:src="pdf_url" width="500" height="400" class="rounded-lg" type="application/pdf">
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