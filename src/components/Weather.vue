<script setup lang="ts">
import { useOpenMeteo } from '@/components/useOpenMeteo.ts'
import type { Place } from '@/components/tsTypes.ts'
import { watch } from 'vue'

const props = defineProps<{ place: Place }>()

watch(props,
  async () => {
    const weatherData = await useOpenMeteo(props.place)
    console.log(weatherData)
  },
  { immediate: true })

</script>

<template>
  <div>WeatherData</div>
</template>

<style scoped></style>
