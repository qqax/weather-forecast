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
  display: flex;
  justify-content: center;
  place-items: center;
  line-height: 1.5;
  padding: 2rem 0;
}
</style>
