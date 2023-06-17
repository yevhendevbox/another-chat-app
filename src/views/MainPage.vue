<template>
  <div class="container mx-auto px-4 flex flex-col h-screen">
    <the-header />
    <the-messages-area />
    <the-footer />
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheMessagesArea from '@/components/TheMessagesArea.vue';

</script>

<style scoped>
</style>