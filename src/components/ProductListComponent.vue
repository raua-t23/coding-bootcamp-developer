<script setup>
defineProps({
  products: Array,
});
</script>

<template>
  <div class="product-list">
    <h2>Alle Gerichte</h2>

    <ul v-if="products && products.length > 0">
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ path: `/product/${product.id}` }">
          <h2>{{ product.name }} {{ product.price }}</h2>
          <img v-if="product.imageUrl" :src="product.imageUrl" alt="" />
          <p>{{ product.description }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
