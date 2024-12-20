<script setup lang="ts">
import SearchPlace from "@/components/SearchPlace.vue";
import { type Ref, ref } from 'vue'
import type { Place } from '@/components/tsTypes.ts'
import Weather from '@/components/Weather.vue'

const place: Ref<Place> = ref(null)

const change = (value) => {
  place.value = { ...value, label: `${value.name} (${value.country}, ${value.timezone})` }
}
</script>

<template>
  <main>
    <SearchPlace v-model="place" @change="change"/>
    <Suspense v-if="place" fallback="loading">
      <Weather :place="place" />
    </Suspense>
  </main>
</template>

<style scoped>

</style>
