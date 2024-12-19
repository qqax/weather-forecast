<script setup lang="ts">
import Multiselect from 'vue-multiselect'
import { ref, watch } from 'vue'
import Weather from '@/components/Weather.vue'

const place: any = ref(null)
const options = ref([])

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

const onSelect = (value) => {
  place.value = { ...value, label: `${value.name} (${value.country}, ${value.timezone})` }
}

watch(place, () => {
  console.log(place.value)
})

</script>

<template>
  <multiselect v-model="place" :options="options" open-direction="bottom" @search-change="asyncFind"
               track-by="label" label="label" @select="onSelect"
               :custom-label="customLabel"></multiselect>
  <Suspense v-if="place" fallback="loading">
    <Weather :latitude="place.latitude" :longitude="place.longitude" />
  </Suspense>
</template>

<style src="vue-multiselect/dist/vue-multiselect.ssr.css"></style>

<style>
</style>
