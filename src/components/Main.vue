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

<style>
.main-container {
  display: flex;
  flex-direction: column;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
