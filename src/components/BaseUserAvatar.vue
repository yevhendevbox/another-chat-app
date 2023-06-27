<template>
  <div class="flex gap-1 items-center">
    <div class="p-2">
      <img :src="props.user?.photoURL ?? undefined" alt="" v-if="props.isLogin" class="rounded-full h-6 w-6">
      <UserCircleIcon class="h-6 w-6" v-else />
    </div>
    <h1 class="text-lg ml-2">{{ props.user?.displayName }}</h1>
  </div>
</template>

<script setup lang="ts">
import { UserCircleIcon } from '@heroicons/vue/24/solid';
import { isNotUndefined } from '@/validators';
import type { PropType } from 'vue';
import { type User } from 'firebase/auth';

const props = defineProps({
  isLogin: {
    type: Boolean,
    required: true,
    validator: isNotUndefined
  },
  user: {
    type: null || Object as PropType<User | null>,
    required: true,
  },
});

</script>

<style scoped>
</style>