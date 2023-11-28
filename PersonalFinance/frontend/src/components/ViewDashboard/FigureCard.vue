<template>
    <div class="w-full max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow sm:p-3 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-2 text-xl font-medium text-gray-800 dark:text-gray-800">{{account_type}}</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xm font-semibold">{{formatPrice(this.current_value)}}</span>
        </div>
        <div class="flow-root">
            <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
                <li class="py-3 sm:py-4">
                </li>
                <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                        
                        <div class="flex-shrink-0" >
                            <svg
                            v-if="difference > 0" 
                            class="text-green-500 transition duration-75 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="0.75em" viewBox="0 0 576 512"><path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/></svg>
                            <svg 
                            v-if="difference === 0" 
                            class="text-gray-500 transition duration-75 dark:text-gray-400"
                            height="0.75em" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"/>
                            </svg>
                            <svg 
                            v-if="difference < 0" 
                            class="text-red-500 transition duration-75 dark:text-gray-400"
                            fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M21,11a1,1,0,0,0-1,1v2.59l-6.29-6.3a1,1,0,0,0-1.42,0L9,11.59,3.71,6.29A1,1,0,0,0,2.29,7.71l6,6a1,1,0,0,0,1.42,0L13,10.41,18.59,16H16a1,1,0,0,0,0,2h5a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,17V12A1,1,0,0,0,21,11Z"/></svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Start Period: {{ period.start_month }} / {{ period.start_year }}
                            </p>
                        </div>
                        <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            {{formatPrice(this.start_value)}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>   
    </div>
</template>

<script>
  import { formatPrice } from '../Utils/utils';
  import { sortBalanceSummaryByDate } from '../Utils/utils';
  import {toRaw} from 'vue'

  export default {
    data(){
        return{
            account_type:null,
            current_value:0,
            start_value:0,
            period: {
                start_month: 0,
                start_year: 0,
                current_month: 0,
                current_year: 0
            },
            difference: 0
        }
    },
    props:{
        balance_summaries:{},
        transactions:{}
    },
    methods:{
        formatPrice,
        setUpFigureCard(account_category, bs){
            this.account_type = account_category
            let sorted_bs = sortBalanceSummaryByDate(toRaw(bs), "dsc")
            let i = sorted_bs.length -1
            if (account_category == "Balance"){
                console.log(sorted_bs[0].starting_balance)
                this.start_value = sorted_bs[i].starting_balance
                this.current_value = sorted_bs[0].ending_balance
            } else if (account_category == "Income"){
                this.start_value = sorted_bs[i].credit_mutation
                this.current_value = sorted_bs[0].credit_mutation
            } else if (account_category == "Expense"){
                this.start_value = sorted_bs[i].debit_mutation
                this.current_value = sorted_bs[0].debit_mutation
            } else{
                throw new Error("Invalid 'account_category' parameter. Use one of ['Balance', 'Income', 'Expense'].");
            }
            this.setUpCardDetails()
            this.period.start_month = sorted_bs[i].month
            this.period.start_year = sorted_bs[i].year
            this.period.current_year = sorted_bs[0].month
            this.period.current_year = sorted_bs[0].year
        },
        setUpCardDetails(){
            let difference = this.current_value - this.start_value 
            console.log(this.difference)
            if (this.account_type == "Income" || this.account_type == "Balance"){
                this.difference = difference 
            } else if (this.account_type == "Expense"){
                this.difference = (difference > 0) ? (difference * -1): 0
            } 
        }
    }
  }
  
</script>