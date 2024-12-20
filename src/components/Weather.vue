<script setup lang="ts">
import { useOpenMeteo } from '@/components/useOpenMeteo.ts'
import type { Place } from '@/components/tsTypes.ts'
import { watch } from 'vue'

const props = defineProps<{ place: Place }>()
let weatherData

watch(props, async () => {
  weatherData = await useOpenMeteo(props.place)
console.log(weatherData)
})


</script>

<template>
  <div>WeatherData</div>
</template>

<style scoped></style>
