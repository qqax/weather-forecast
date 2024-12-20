<script setup lang="ts">
import type { Current } from '@/components/tsTypes.ts'

const { current } = defineProps<{ current: Current }>()

</script>

<template>
  <table>
    <caption>
      Current weather
    </caption>
    <tr>
      <th>Temperature</th>
      <th>{{ current?.temperature2m.toFixed(1) }}</th>
    </tr>
    <tr>
      <th>Surface pressure</th>
      <th>{{ current?.surfacePressure.toFixed(1) }}</th>
    </tr>
    <tr>
      <th>Humidity</th>
      <th>{{ current?.relativeHumidity2m }}</th>
    </tr>
  </table>
</template>

<style scoped>

</style>
