<script setup lang="ts">
import { useOpenMeteo } from '@/utils/useOpenMeteo.ts'
import type { Place } from '@/components/tsTypes.ts'
import { ref, watch } from 'vue'
import Current from '@/components/Current.vue'
import Forecast from '@/components/Forecast.vue'

const props = defineProps<{ place: Place | undefined }>()
const currentWeather = ref()
const hourlyForecast = ref()
const z = ref()

watch(props,

  async () => {
    if (!!props.place) {
      const { current, hourly, timezone } = await useOpenMeteo(props.place)
      currentWeather.value = current
      hourlyForecast.value = hourly
      z.value = timezone
    }
  },
  { immediate: true })

</script>

<template>
  <div class="main-container content weather">
    <Current v-if="currentWeather" :current="currentWeather" :timezone="z" />
    <Forecast v-if="hourlyForecast" :hourly="hourlyForecast" :timezone="z" />
  </div>
</template>

<style scoped>
.weather {
  align-items: start;
}
</style>
