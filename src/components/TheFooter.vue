<template>
  <footer class="sticky bottom-0 bg-gray-800 text-white py-4 px-8 flex justify-between items-center">
    <div class="flex">
      <HomeIcon class="h-6 w-6" />
      <span class="ml-2">Домівка</span>
    </div>
    <div class="flex">
      <ChatBubbleBottomCenterTextIcon class="h-6 w-6" />
      <span class="ml-2">Чати</span>
    </div>
    <div class="flex">
      <CogIcon class="h-6 w-6" />
      <span class="ml-2">Налаштування</span>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/vue/24/solid';
import { HomeIcon } from '@heroicons/vue/24/solid';
import { CogIcon } from '@heroicons/vue/24/solid';
</script>

<style lang="scss" scoped></style>
