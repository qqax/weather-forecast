<script setup lang="ts">
import type { Current } from '@/components/tsTypes.ts'
import { computed } from 'vue'
import { temperatureToHSL } from '@/utils/temperature.ts'

const props = defineProps<{ current: Current, timezone: string }>()

const color = computed(() => {
  return temperatureToHSL(props.current.temperature2m)
})

</script>

<template>
  <div class="forecast-container" :style="{ background: `hsl(${color}, 100%, 85%)`}">
  <table>
    <caption>
      {{ current?.time.toLocaleTimeString("en-US", {timeZone: timezone, hour: 'numeric', minute: '2-digit'}) }} Current weather
    </caption>
    <tr>
      <th>Temperature</th>
      <th>{{ current?.temperature2m.toFixed(1) }} °C</th>
    </tr>
    <tr>
      <th>Surface pressure</th>
      <th>{{ current?.surfacePressure.toFixed(1) }}</th>
    </tr>
    <tr>
      <th>Humidity</th>
      <th>{{ current?.relativeHumidity2m }} %</th>
    </tr>
  </table>
  </div>
</template>

<style scoped>

</style>
