<template>
  <footer class="sticky bottom-0 bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
    <BaseFooterButton :icon="HomeIcon" label="Домівка" />
    <BaseFooterButton :icon="ChatBubbleBottomCenterTextIcon" label="Чати" />
    <BaseFooterButton :icon="CogIcon" label="Налаштування" />
  </footer>
</template>

<script lang="ts" setup>
import BaseFooterButton from './BaseFooterButton.vue';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/solid';
import { HomeIcon } from '@heroicons/vue/24/solid';
import { CogIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped></style>
