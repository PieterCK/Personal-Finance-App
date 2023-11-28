<template>
  <div class="col-span-1 w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-800">Expense Breakdown</h5>
    <Line :data="data" :options="options" />
</div>
    
</template>

<script >
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
        data : {
            labels: [],
            datasets: [
                {
                backgroundColor: ['#41B883','#DD1B16'],
                data: []
                }
            ]
        },
        options : {
            responsive: true,
            maintainAspectRatio: true
        }
    }   
  },
  methods:{
    setUpLineChart(data){
        this.data = data
    }
  }
}
</script>