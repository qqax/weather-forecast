<script setup lang="ts">
import SearchPlace from "@/components/SearchPlace.vue";
import {ref, watch} from "vue";

const place = ref('')


watch(place, () => {
  console.log(place.value)
})
</script>

<template>
<SearchPlace v-model="place"/>
</template>

<style scoped>

</style>
