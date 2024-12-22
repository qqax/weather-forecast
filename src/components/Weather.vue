<script setup lang="ts">
import { fetchForecast } from '@/requests/fetchForecast.ts'
import type { Cords } from '@/assets/tsTypes.ts'
import { ref, watch } from 'vue'
import Current from '@/components/Current.vue'
import Forecast from '@/components/Forecast.vue'

const props = defineProps<{ cords: Cords }>()
const currentWeather = ref()
const hourlyForecast = ref()
const z = ref()

watch(props,
  async () => {
    const { current, hourly, timezone } = await fetchForecast(props.cords)
    currentWeather.value = current
    hourlyForecast.value = hourly
    z.value = timezone
  },
  { immediate: true })

</script>

<template>
  <div class="main-container content weather">
    <Current v-if="currentWeather" :current="currentWeather" :timezone="z" />
    <div v-else>Loading...</div>
    <Forecast v-if="hourlyForecast" :hourly="hourlyForecast" :timezone="z" />
  </div>
</template>

<style scoped>
.weather {
  align-items: start;
}
</style>
