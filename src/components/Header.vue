<script setup lang="ts">

</script>

<template>
  <header>
    <h1>
      <slot name="header"></slot>
    </h1>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: center;
    place-items: center;
    padding: 2rem 0;
  }
}
</style>
