<script setup lang="ts">
import Multiselect from 'vue-multiselect'
import { ref } from 'vue'
import type { Place } from '@/components/tsTypes.ts'

const place = defineModel<Place>()
const options = ref([])

const emit = defineEmits<{
  (e: 'change', place: Place): void
}>()

const asyncFind = async (value) => {
  const url = new URL('https://geocoding-api.open-meteo.com/v1/search')
  url.searchParams.append('name', value)
  url.searchParams.append('count', '10')
  url.searchParams.append('language', 'en')
  url.searchParams.append('format', 'json')
  fetch(url)
    .then(response => response.json())
    .then(({ results }) => {
      options.value = results?.map(data => data) ?? []
    })
}

const customLabel = ({ name, country, timezone }: { name: string; country: string; timezone: string }) => {
  return `${name} (${country}, ${timezone})`
}

</script>

<template>
  <multiselect v-model="place" :options="options" open-direction="bottom" @search-change="asyncFind"
               track-by="label" label="label" @select="emit('change', $event)" :preserve-search="true" :clear-on-select="false"
               :custom-label="customLabel"></multiselect>
</template>

<style src="vue-multiselect/dist/vue-multiselect.ssr.css"></style>

<style>
</style>
