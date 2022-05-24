<script setup>
import { useStore } from 'vuex';

const store = useStore();
</script>

<template>({{ store.getters.count }})</template>
