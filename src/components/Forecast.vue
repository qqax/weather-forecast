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
import type { Hourly } from '@/components/tsTypes.ts'

const props = defineProps<{ hourly: Hourly }>()

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
    labels: props.hourly.time.map(date => date.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit'
    })),
    datasets: [
      {
        label: '12 hours forecast',
        backgroundColor: '#ffffff',
        data: [...props.hourly.temperature2m],
        fill: false,
        borderColor: 'rgb(255,53,53)',
        tension: 0.4
      }
    ]
  }
})

const chartOptions = {
  responsive: true
}

</script>

<template>
  <Line :data="chartData" :options="chartOptions" />
</template>

<style scoped>

</style>
