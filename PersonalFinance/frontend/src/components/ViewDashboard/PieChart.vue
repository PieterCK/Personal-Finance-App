<template>
  <div class="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    
</div>
    
</template>

<script >
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return {
        data : {
            labels: [],
            datasets: [
                {
                backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                data: []
                }
            ]
        },
        options : {
            responsive: true,
            maintainAspectRatio: true
        },
        labels: [
          '12am',
          '3am',
          '6am',
          '9am',
          '12pm',
          '3pm',
          '6pm',
          '9pm'
        ],
        value: [
          200,
          675,
          410,
          390,
          310,
          460,
          250,
          240
        ]
    }   
  },
  methods:{
    setUpPieChart(data){
        this.data = data
    }
  }
}
</script>