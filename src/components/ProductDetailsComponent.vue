<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { data } from '../../products.db.json';

const route = useRoute();
const currentProduct = ref({});

currentProduct.value = data.products.find((product) => product.id === +route.params.id);
</script>

<template>
  <div class="product-details">
    <h2>{{ currentProduct.name }} ({{ route.params.id }})</h2>
    <img v-if="currentProduct.imageUrl" :src="currentProduct.imageUrl" />
    <p>{{ currentProduct.description }}</p>
    <router-link class="button" :to="{ path: '/' }">Zurück zur Übersicht</router-link>
  </div>
</template>
