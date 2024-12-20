<script setup lang="ts">
import { useOpenMeteo } from '@/components/useOpenMeteo.ts'
import type { Place } from '@/components/tsTypes.ts'
import { ref, watch } from 'vue'
import CurrentWeather from '@/components/CurrentWeather.vue'
import Forecast from '@/components/Forecast.vue'

const props = defineProps<{ place: Place }>()
const currentWeather = ref()
const hourlyForecast = ref()

watch(props,
  async () => {
    const { current, hourly } = await useOpenMeteo(props.place)
    currentWeather.value = current
    hourlyForecast.value = hourly
  },
  { immediate: true })

</script>

<template>
  <CurrentWeather v-if="currentWeather" :current="currentWeather"/>
  <Forecast v-if="hourlyForecast" :hourly="hourlyForecast"/>
</template>

<style scoped></style>
