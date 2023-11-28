<template>
  <div class="w-11/12 col-span-2 row-span-2 p-5 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800">Expense Breakdown</h5>
    <apexchart v-if="finishedSetup" :options="chartOptions" :series="chartSeries"></apexchart>
</div>
</template>

<script >
import { formatCurrency } from '../Utils/utils';

export default {
  
  props: {
    transactions_data: [],
  },
  data(){
    return{
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
    }
  },
  methods:{
    updateData(){
      this.items = {};
      this.chartSeries = [];
      this.transactions_data.forEach((item)=>{
          const transaction_name = item.account_type
          const transaction_amount = parseInt(item.amount)
          this.items[transaction_name] = (this.items[transaction_name] || 0)+transaction_amount
      })
      this.chartSeries = Object.values(this.items)
      this.chartOptions.labels = Object.keys(this.items)
      
    },
    formatCurrency
  }
}
</script>