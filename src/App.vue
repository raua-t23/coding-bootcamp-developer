<script setup>
import { inject } from 'vue';
import MainNavigation from '@/components/MainNavigationComponent.vue';

const data = inject('mockData');
</script>

<template>
  <main>
    <h1>Lieferdienst App</h1>

    <MainNavigation />

    <router-view :data="data"></router-view>
  </main>
</template>
