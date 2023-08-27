<template>
    <Pie :data="data" :options="options" />
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
        }
    }   
  },
  methods:{
    setUpPieChart(data){
        this.data = data
    }
  }
}
</script>