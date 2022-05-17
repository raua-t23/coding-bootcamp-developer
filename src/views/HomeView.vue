<script setup>
import ProductListComponent from '../components/ProductListComponent.vue';

defineProps({
  data: Object,
});
</script>
<template>
  <div class="home">
    <ProductListComponent :products="data.products"></ProductListComponent>
  </div>
</template>
