<template>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
    <input @change="uploaded_file" name ="uploaded_file" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
    <div>Selected File: {{ uploaded_file }}</div>
    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Bank</label>
    <select v-model="bank_code" id="countries" name="bank" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
        <option>BCA</option>
        <option>BNI</option>
        <option>BTPN</option>
    </select>
    <div>Selected Bank: {{ bank_code }}</div>
    <button @click="process_form" type="submit" class="text-white mt-2 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Extract Transactions</button>
</template>

<script>
export default {
    data(){
        return {
            uploaded_file:"",
            bank_code:""
        }
    },
    method:{
        process_form(){
            console.log("selected file: ",this.uploaded_file);
            console.log("selected_bankcode: ", this.bank_code);
        }
    }
}
</script>