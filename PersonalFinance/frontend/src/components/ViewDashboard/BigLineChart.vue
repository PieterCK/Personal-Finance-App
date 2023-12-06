<template>
    <div class="w-full col-span-2 row-span-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 p-8 md:p-6">
      <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800">Transaction Breakdown</h5>
      <div class="border-gray-200 border-b dark:border-gray-700">
        <ul class="flex flex-wrap text-sm justify-end font-medium text-center text-gray-500 dark:text-gray-400">
          <li v-for="timeOpt in timeIntervalOpt" :key="timeOpt" class="me-2">
            <button               
              @click="selectDropDown('time_interval', timeOpt)"
              :class="{ 'text-blue-600': timeInterval === timeOpt }"
              class="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">{{timeOpt}}
            </button>
          </li>
        </ul>
      </div>
      <apexchart v-if="finishedSetup" :options="chartOptions" :series="chartSeries"></apexchart>
      <div v-else role="status" class="p-4 animate-pulse md:p-6">
        <div class="h-2.1 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
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
        <div class="flex justify-around items-center pt-5">
          <!-- Button -->
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="contentTypeOpt"
            data-dropdown-placement="bottom"
            class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button">
            {{contentType}}
            <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="contentTypeOpt" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
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
  
  <script>
  import { formatCurrency } from '../Utils/utils';

  export default {
    props: {
      transactions_data: [],
      balance_summaries: []
    },
    computed:{
        groupBy(){
            const tmp = {
                "Account Type":'account_type',
                "Income & Expense":'entry',
                'Total Balance':'total_balance'
            }
            return tmp[this.contentType]
        },
    },
    data() {
      return {
        contentTypeOpt: ['Account Type', 'Income & Expense', 'Total Balance'],
        contentType: 'Total Balance',
        timeIntervalOpt: ['Weekly', 'Monthly'],
        timeInterval: 'Weekly',
        template_chart_data:[],
        dataStore: null,
        finishedSetup:false,
        chartSeries: [],
        chartOptions: {
          chart: {
            height: '100%',
            maxWidth: '100%',
            type: 'area',
            fontFamily: 'Inter, sans-serif',
            dropShadow: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              show: false,
            },
          },
          legend: {
            show: true,
          },
          fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.55,
              opacityTo: 0,
              shade: '#1C64F2',
              gradientToColors: ['#1C64F2'],
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            width: 6,
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: 0,
            },
          },
          xaxis: {
            categories: [],
            labels: {
              show: true,
              style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
            },
            axisBorder: {
              show: true,
            },
            axisTicks: {
              show: false,
            },
          },
          yaxis: {
            show: false,
            labels: {
              formatter: function (value) {
                return formatCurrency(value)
              },
            },
          },
        }
      };
    },
    watch: {
      transactions_data(){
        this.updateData()
      },
      contentType(){
        this.updateData()
      },
      timeInterval(){
        this.updateData()
      },
    },
    methods: {
      formatCurrency,
      selectDropDown(selected, option) {
        if(selected == "content_type"){
          this.contentType = option
        }else if(selected == "time_interval"){
          this.timeInterval = option
        }
      },
      updateData() {
        this.finishedSetup = false
        if (!this.transactions_data) return;
        this.generateEmptyData(this.transactions_data[0]['date'], this.transactions_data[this.transactions_data.length - 1]['date'])
        this.computeDataStore();
        this.computeSeriesData(); 
        this.computeXAxis();
        setTimeout(()=>{
            this.finishedSetup = true
        }, 500);
      },
      generateEmptyData(startDateStr, endDateStr) {
        /**
         * effects: initializes empty data structure to be used by 
         *          `computeDataStore` & `computeXAxis` methdos
         * output: {
         *  4-2023 Week-1: 0, 
         *  4-2023 Week-2: 0, 
         *  4-2023 Week-3: 0, 
         *  4-2023 Week-4: 0
         *  continue -->
         * }
        */
        const startDate = new Date(Date.parse(startDateStr));
        const endDate = new Date(Date.parse(endDateStr));
        const data = {};
        for (let d = new Date(startDate); d <= endDate; d.setMonth(d.getMonth()+1)) {
          const month = d.getMonth()+1;
          const year = d.getFullYear();
  
          if (this.timeInterval === 'Weekly') {
            for (let week = 1; week <= 4; week++) {
              let key = `${month}-${year} W-${week}`;
              data[key] = 0;
            }
          } else if (this.timeInterval === 'Monthly') {
            let key = `Month ${month}-${year}`;
            data[key] = 0;
          }
        }
        this.template_chart_data = data
      },
      computeDataStore() {
        /**
         * param: transactions_data, timeInterval, groupBy
         * effects: output updates dataStore, used by other methods
         * output: {
         *  'Group By':{
         *      'Time Period 1' : 1105012,
         *      'Time Period 2' : 1105012,
         *      'Time Period 3' : 1105012,
         *  }
         *  continue -->
         * }
        */
        const { transactions_data, timeInterval, groupBy } = this;
        const out = new Map();
        let total_account_balance = parseFloat(this.balance_summaries[0].starting_balance)
        transactions_data.forEach((transaction) => {
          const date = new Date(transaction.date);
          const is_expense = transaction.entry==="Debit"

          let date_period;
          if (timeInterval === 'Weekly') {
            let tmp_week = Math.ceil(date.getDate() / 7);
            tmp_week = tmp_week > 4 ? 4 : tmp_week;
            date_period = `${date.getMonth()+1}-${date.getFullYear()} W-${tmp_week}`;
          } else if (timeInterval === 'Monthly') {
            let tmp_month = date.getMonth()+1;
            date_period = `Month ${tmp_month}-${date.getFullYear()}`;
          }
          
          if (groupBy === 'total_balance'){
            const dict_key = "Total Balance"
            const current_accumulated_amount = total_account_balance + (is_expense ? (-parseFloat(transaction.amount)):parseFloat(transaction.amount)) 

            if (!out.has(dict_key)) {
              out.set(dict_key, { [date_period]: current_accumulated_amount})
            } else {
              out.get(dict_key)[date_period] = current_accumulated_amount;
            }
            total_account_balance = current_accumulated_amount;
          } else{
            const group = transaction[groupBy]=== null? "Unlabeled":transaction[groupBy];
            if (!out.has(group)) {
              out.set(group, { [date_period]: parseFloat(transaction.amount) });
            } else {
              out.get(group)[date_period] = (out.get(group)[date_period] || 0) + parseFloat(transaction.amount);
            }
          }
        });
        const result = Object.fromEntries(out);
        this.dataStore = result
      },
      computeSeriesData() {
        /**
         * param: transactions_data, dataStore, template_chart_data
         * effects: reformats dataStore into template_chart_data used in chartSeries
         * output: [
         *  {
         *      name: Food & Supplies,
         *      data: [684261, 1043624, 841925],
         *      color: '#1A56DB',
         *  }
         *  continue -->
         * ]
        */
        if (!this.dataStore){
            return
        } 
        this.chartSeries = []
        let color_code = `#1A56DB`
        let count = 1
        for (const key in this.dataStore) {
          let series_template = { ...this.template_chart_data }
          for (const period in this.dataStore[key]) {
            series_template[period] = this.dataStore[key][period];
          }
          this.chartSeries.push({
            name: key,
            data: Object.values(series_template),
            color: color_code,
          });
          color_code = this.incrementColor(color_code, count)
          count+=100
        }
      },
      incrementColor(hexColor, increment){
        if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(hexColor)) {
            console.error('Invalid hex color format');
            return null;
        }

        let numericColor = parseInt(hexColor.slice(1), 16);
        numericColor += increment;
        numericColor = Math.min(numericColor, 0xffffff);

        return '#' + numericColor.toString(16).padStart(6, '0');
      },
      computeXAxis() {
        /**
         * param: transactions_data, template_chart_data
         * effects: reformats template_chart_data into xaxis data
         * output: ['6-2023 Week-1', '6-2023 Week-2', '6-2023 Week-3', '6-2023 Week-4', '5-2023 Week-1']
        */
        if (!this.transactions_data) return;
        let series_template = {...this.template_chart_data}
        const xaxis_periods = Object.keys(series_template);
        this.chartOptions.xaxis.categories=xaxis_periods
      },
    },
  };
  </script>
  
  <style>
    /* Add your styles here */
  </style>
  