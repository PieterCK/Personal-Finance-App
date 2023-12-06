<template>
  <div class="w-full col-span-2 flex flex-col row-span-2 p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800">Expense Breakdown</h5>
    <apexchart v-if="finishedSetup" :options="chartOptions" :series="chartSeries"></apexchart>
    <div v-else role="status" class="p-4 animate-pulse md:p-6">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
      <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      <div class="flex items-baseline mt-4">
          <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
          <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
          <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
          <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
      </div>
      <span class="sr-only">Loading...</span>
    </div>
    <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
      <div class="flex justify-evenly  items-center pt-5">
        <!-- Button -->
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="contentTypeOptPieChart"
          data-dropdown-placement="bottom"
          class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
          type="button">
          {{contentType}}
          <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div id="contentTypeOptPieChart" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li v-for="opt in contentTypeOpt" :key="opt">
                <button               
                @click="selectDropDown('content_type',opt)"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{{opt}}
                </button>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { formatCurrency } from '../Utils/utils';

export default {
  
  props: {
    transactions_data: [],
  },
  computed:{
        groupBy(){
            const tmp = {
                "Account Type":'account_type',
                "Income & Expense":'entry',
                'Total Balance':'total_balance'
            }
            return tmp[this.contentType]
        }
    },
  data(){
    return{
        contentTypeOpt: ['Account Type', 'Income & Expense'],
        contentType: 'Account Type',
        chartOptions: {
            chart: {
              height: "100%",
              maxWidth: "100%",
              type: "pie",
              fontFamily: "Inter, sans-serif",
              dropShadow: {
                  enabled: false,
              },
              toolbar: {
                  show: false,
              },
            },
            colors: ["#1C64F2", "#16BDCA", "#9061F9"],
            stroke: {
              colors: ["white"],
              lineCap: "",
            },
            plotOptions: {
              pie: {
                labels: {
                  show: true,
                },
                size: "100%",
                dataLabels: {
                  offset: -25
                }
              },
            },
            labels: ["Direct", "Organic search", "Referrals"],
            dataLabels: {
              enabled: true,
              style: {
                fontFamily: "Inter, sans-serif",
              },
            },
            legend: {
              position: "bottom",
              fontFamily: "Inter, sans-serif",
            },
            yaxis: {
              labels: {
                formatter: function (value) {
                  return formatCurrency(value)
                },
              },
            },
            xaxis: {
              labels: {
                formatter: function (value) {
                  return formatCurrency(value)
                },
              },
              axisTicks: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
            },
        },
        chartSeries: [52.8, 26.8, 20.4],
        finishedSetup:false,
        items:{}
    }
  },
  watch:{
    transactions_data(){
      this.finishedSetup = false
      this.updateData()
      setTimeout(()=>{
            this.finishedSetup = true
        }, 500);
    },
    contentType(){
      this.finishedSetup = false
      this.updateData()
      setTimeout(()=>{
            this.finishedSetup = true
        }, 500);
    },
  },
  methods:{
    updateData(){
      this.items = {};
      this.chartSeries = [];
      this.chartOptions.labels = []
      this.transactions_data.forEach((item)=>{
          if (this.groupBy === "account_type"){
            const transaction_name = item.account_type
            const transaction_amount = parseInt(item.amount)
            this.items[transaction_name] = (this.items[transaction_name] || 0)+transaction_amount
          }else if (this.groupBy === "entry"){
            const transaction_type = item.entry
            const transaction_amount = parseInt(item.amount)
            this.items[transaction_type] = (this.items[transaction_type] || 0)+transaction_amount
          }
      })
      this.chartSeries = Object.values(this.items)
      this.chartOptions.labels = Object.keys(this.items)
      
    },
    selectDropDown(selected, option) {
      if(selected == "content_type"){
        this.contentType = option
      }else if(selected == "time_interval"){
        this.timeInterval = option
      }
    },
    formatCurrency
  }
}
</script>