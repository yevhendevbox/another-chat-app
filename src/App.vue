<template>
  <div class="container mx-auto px-4 flex flex-col min-h-screen">
    <the-header />
    <the-messages-area />
    <the-footer />
  </div>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue';
import TheMessagesArea from './components/TheMessagesArea.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style scoped></style>
