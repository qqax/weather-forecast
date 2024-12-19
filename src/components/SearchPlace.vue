<script setup lang="ts">
import Multiselect from 'vue-multiselect'
import { ref } from 'vue'

const model = defineModel()
let options = ref([])

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
  <div>
    <multiselect v-model="model" :options="options" open-direction="bottom" @search-change="asyncFind"
                 :custom-label="customLabel"></multiselect>
  </div>
</template>

<style src="vue-multiselect/dist/vue-multiselect.ssr.css"></style>

<style>
</style>
