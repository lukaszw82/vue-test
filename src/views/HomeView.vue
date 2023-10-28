<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main class="home">
    <TheWelcome />
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .home {
    display: flex;
    align-items: center;
  }
}
</style>
