<script setup lang="ts">
import { useOpenMeteo } from '@/components/useOpenMeteo.ts'

const props = defineProps<{
  latitude: number
  longitude: number
}>()

const weatherData = await useOpenMeteo(props)

console.log(weatherData)



</script>

<template>
<div>WeatherData</div>
</template>

<style scoped>

</style>
