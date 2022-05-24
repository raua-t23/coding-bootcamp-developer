<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { inject } from 'vue';
import AddRemoveButtons from './AddRemoveButtonsComponent.vue';

const route = useRoute();
const data = inject('mockData');
const currentProduct = ref({});

currentProduct.value = data.products.find((product) => product.id === +route.params.id);
</script>

<template>
  <div class="product-details">
    <h2>{{ currentProduct.name }} ({{ route.params.id }})</h2>

    <img v-if="currentProduct.imageUrl" :src="currentProduct.imageUrl" />

    <p>{{ currentProduct.description }}</p>

    <AddRemoveButtons :product-id="currentProduct.id" :show-counter="true" />

    <router-link class="button" :to="{ path: '/' }">Zurück zur Speisekarte</router-link>
  </div>
</template>
