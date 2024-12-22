<script setup lang="ts">
import type { Current } from '@/assets/tsTypes.ts'
import { computed } from 'vue'
import { temperatureToHSL } from '@/utils/temperature.ts'

const props = defineProps<{ current: Current, timezone: string }>()

const color = computed(() => {
  return temperatureToHSL(props.current.temperature2m)
})

</script>

<template>
  <div class="forecast-container current" :style="{ background: `hsl(${color}, 100%, 85%)`}">
    <h2>Current weather</h2>
    <small class="forecast-time"><i>data as of {{ current?.time.toLocaleTimeString("en-US", {timeZone: timezone, hour: 'numeric', minute: '2-digit'}) }}</i></small>
    <div class="forecast-item">
      <div>Temperature</div>
      <div>{{ current?.temperature2m.toFixed(1) }} °C</div>
    </div>
    <div class="forecast-item">
      <div>Surface pressure</div>
      <div>{{ current?.surfacePressure.toFixed(1) }}</div>
    </div>
    <div class="forecast-item">
      <div>Humidity</div>
      <div>{{ current?.relativeHumidity2m }} %</div>
    </div>
  </div>
</template>

<style scoped>
.forecast-item {
  display: flex;
  justify-content: space-between;
}
.current {
  max-width: 15rem;
  min-width: 14rem;
}
.forecast-time {
  display: block;
  text-align: right;
}
</style>
