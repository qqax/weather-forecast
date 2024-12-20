<script setup lang="ts">
import Header from "@/components/Header.vue";
import Forecast from "@/components/Main.vue";
</script>

<template>
  <Header>
    <template #header>Weather forecast</template>
  </Header>

  <main>
    <Forecast/>
  </main>
</template>

<style scoped>

</style>
