<script setup lang="ts">
import { useOpenMeteo } from '@/components/useOpenMeteo.ts'
import type { Place } from '@/components/tsTypes.ts'

const props = defineProps<Place>()

const weatherData = await useOpenMeteo(props)

console.log(weatherData)



</script>

<template>
<div>WeatherData</div>
</template>

<style scoped>

</style>
