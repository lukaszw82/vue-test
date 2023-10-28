<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
</script>

<template>
  <div>
  <h1>TODO: </h1>
  <WelcomeItem>
    <template #heading>Testing</template>Add unit and e2e tests
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>Deploy</template>
    Deploy on Netlify
  </WelcomeItem>
</div>
</template>
