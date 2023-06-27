<template>
  <header class="sticky top-0 bg-gray-800 text-white py-4 px-8 flex items-center justify-center">
    <base-user-avatar :is-login="isLogin" :user="user ?? null" />
  </header>
</template>

<script lang="ts" setup>
import { onUnmounted } from 'vue';
import BaseUserAvatar from './BaseUserAvatar.vue';
import { useAuth } from '@/composibles/auth.composible';

const { user, isLogin, signIn, signOut } = useAuth();
signIn();

onUnmounted(signOut);
</script>

<style lang="scss" scoped></style>
