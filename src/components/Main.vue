<script setup lang="ts">
import SearchPlace from '@/components/SearchPlace.vue'
import { type Ref, ref } from 'vue'
import type { Place } from '@/components/tsTypes.ts'
import Weather from '@/components/Weather.vue'

const place: Ref<Place | undefined> = ref(undefined)

const change = (value) => {
  place.value = { ...value, label: `${value.name} (${value.country}, ${value.timezone})` }
}

</script>

<template>
  <main class="main-container">
    <SearchPlace v-model="place" @change="change" />
    <Weather :place="place" />
  </main>
</template>

<style scoped>
</style>
