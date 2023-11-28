<template>
    <div class="w-11/12 col-span-2 row-span-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 p-8 md:p-6">
    <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800">Transaction Breakdown</h5>
    
      <div class="flex justify-center">
        <v-combobox
          chips
          class="w-full max-w-sm p-5"
          label="Content"
          :items="contentTypeOpt"
          v-model="contentType"
          variant="solo-filled"
        ></v-combobox>
        <v-combobox
          chips
          class="w-full max-w-sm p-5"
          label="Time Intervals"
          :items="timeIntervalOpt"
          v-model="timeInterval"
          variant="solo-filled"
        ></v-combobox>
      </div>
      <apexchart v-if="finishedSetup" :options="chartOptions" :series="chartSeries"></apexchart>
      <div class="flex justify-between">
        <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
        </div>
      </div>
      <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"></div>
    </div>
  </template>
  
  <script>
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
            }
            return tmp[this.contentType]
        },
    },
    data() {
      return {
        contentTypeOpt: ['Account Type', 'Income & Expense'],
        contentType: 'Account Type',
        timeIntervalOpt: ['Weekly', 'Monthly'],
        timeInterval: 'Weekly',
        template_chart_data:[],
        dataStore: null,
        finishedSetup:false,
        chartSeries: [52.8, 26.8, 20.4],
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
        for (let d = new Date(startDate); d <= endDate; d.setMonth(d.getMonth() + 1)) {
          const month = d.getMonth();
          const year = d.getFullYear();
  
          if (this.timeInterval === 'Weekly') {
            for (let week = 1; week <= 4; week++) {
              let key = `${month}-${year} Week-${week}`;
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
        transactions_data.forEach((transaction) => {
          const date = new Date(transaction.date);
          const group = transaction[groupBy]=== null? "Unlabeled":transaction[groupBy];
          let date_period;
          if (timeInterval === 'Weekly') {
            let tmp_week = Math.ceil(date.getDate() / 7);
            tmp_week = tmp_week > 4 ? 4 : tmp_week;
            date_period = `${date.getMonth()}-${date.getFullYear()} Week-${tmp_week}`;
          } else if (timeInterval === 'Monthly') {
            let tmp_month = date.getMonth();
            date_period = `Month ${tmp_month}-${date.getFullYear()}`;
          }
          if (!out.has(group)) {
            out.set(group, { [date_period]: parseFloat(transaction.amount) });
          } else {
            out.get(group)[date_period] = (out.get(group)[date_period] || 0) + parseFloat(transaction.amount);
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
  