<template lang="eng">
    <div class="w-full p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-2 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800"></h5>
        <div class="relative overflow-y-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 rounded-lg uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-2">
                            Transaction
                        </th>
                        <th scope="col" class="px-3 py-1 ">
                            Count
                        </th>
                        <th scope="col" class="flex-row px-3 py-3 ">
                            Net Value
                        </th>
                    </tr>
                </thead>
                <tbody class="overflow-y-auto">
                    <tr v-for="(values, name) in items" class="bg-white dark:bg-gray-800">
                        <th scope="row" class="p-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{name}}
                        </th>
                        <td class="px-3 py-1">
                            {{values.count}}
                        </td>
                        <td class="px-3 py-3">
                            {{formatCurrency(values.value)}}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr class="font-semibold text-gray-900 dark:text-white">
                        <th scope="row" class="p-2 text-base">Total</th>
                        <td class="px-3 py-1">{{total.count}}</td>
                        <td class="px-3 py-3">{{formatCurrency(total.value)}}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</template>
<script>
import { formatCurrency } from '../Utils/utils';

export default {
    props: {
      transactions_data: [],
    },
    data(){
        return{
            items:{
                "Groceries":{
                    count : 12,
                    value: 120000
                }
            },
            total: {
                count: 12,
                value: 120000
            }
        }
    },
    watch:{
        transactions_data(){
            this.updateData()
        }
    },
    methods: {
        updateData(){
            if (!this.transactions_data) return;
            this.items={}
            this.total.count = 0
            this.total.value = 0
            this.transactions_data.forEach((item)=>{
                const transaction_name = item.account_type
                const transaction_amount = parseInt(item.amount)
                const is_expense = item.entry==="Debit"
                if (transaction_name in this.items){
                    this.items[transaction_name]["count"]+=1
                    if (is_expense){
                        this.items[transaction_name]["value"]-= transaction_amount
                    }else{
                        this.items[transaction_name]["value"]+= transaction_amount
                    }
                } else{
                    this.items[transaction_name] = {
                        count:1,
                        value: is_expense? -transaction_amount:transaction_amount
                    }
                }
                this.total.count +=1
                this.total.value += is_expense?-transaction_amount:transaction_amount
            })
        },
        formatCurrency
    },
}
</script>
<style lang="">
    
</style>