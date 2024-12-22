<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { computed } from 'vue'
import type { Hourly } from '@/assets/tsTypes.ts'
import { temperatureToHSL } from '@/utils/temperature.ts'

const props = defineProps<{ hourly: Hourly, timezone: string }>()

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const chartData = computed(() => {
  return {
    labels: props.hourly.time.map(date => date.toLocaleTimeString("en-US", {timeZone: props.timezone, hour: 'numeric', minute: '2-digit'})),
    datasets: [
      {
        backgroundColor: '#ffffff',
        data: [...props.hourly.temperature2m],
        fill: false,
        borderColor: 'rgba(0,18,73,0.61)',
        tension: 0.4,
      }
    ]
  }
})

const chartOptions = {
  responsive: true,
  scales: {
    x: {
      position: "top",
    },

  },
  plugins: {
    legend: {
      display: false,
    }
  }
}

const colors = computed(() => {
  const maxTemp = Math.max(...props.hourly.temperature2m)
  const minTemp = Math.min(...props.hourly.temperature2m)
  return { min: temperatureToHSL(minTemp), max: temperatureToHSL(maxTemp)}
})

</script>

<template>
  <div class="forecast-container forecast-container--12days" :style="{ background: `linear-gradient(0deg, hsl(${colors.min}, 100%, 85%) 35%, hsl(${colors.max}, 100%, 85%) 100%)` }">
    <Line :data="chartData" aria-label="Weather in place at :" :options="chartOptions" />
  </div>
</template>

<style scoped>
.forecast-container--12days {
  width: 100%;
  max-width: 600px;
  overflow: auto;
  display: flex;
  justify-content: center;
}
</style>
