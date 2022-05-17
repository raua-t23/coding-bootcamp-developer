<script setup>
import { data } from '../products.db.json';
import MainNavigation from '@/components/MainNavigationComponent.vue';
</script>

<template>
  <main>
    <h1>App Title</h1>
    <MainNavigation />
    <router-view :data="data"></router-view>
  </main>
</template>
