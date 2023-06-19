<template>
  <div class="flex">
    <component :is="props.icon" class="h-6 w-6" />
    <span class="ml-2">{{ props.label }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  icon: {
    type: String,
    requered: true,
  },
  label: {
    type: String,
    requered: true,
  },
});
</script>

<style lang="scss" scoped></style>
