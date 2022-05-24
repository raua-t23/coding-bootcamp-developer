<script setup>
import { inject } from 'vue';
import { useStore } from 'vuex';
import AddRemoveButtons from './AddRemoveButtonsComponent.vue';

const store = useStore();
const data = inject('mockData');

const listProduct = (productId) => {
  const index = data.products.findIndex((product) => product.id === parseInt(productId));

  if (index === -1) {
    return;
  }

  return `${store.getters.countById(productId)} * ${data.products[index].name} =
  ${((data.products[index].price * store.getters.countById(productId)) / 100).toFixed(2)} €`;
};

const processCheckout = () => {
  alert(`Todo: process checkout`);
};
</script>

<template>
  <ul>
    <li v-for="(product, index) in store.state.cart" :key="index">
      <router-link :to="{ path: `/product/${product.id}` }">
        {{ listProduct(product.id) }}
      </router-link>

      <button class="delete" @click="store.commit('delete', product.id)">&times; Löschen</button>

      <AddRemoveButtons :product-id="product.id" />
    </li>
  </ul>

  <h3>Summe</h3>

  <p>{{ store.getters.total }} €</p>
  <p><button @click="processCheckout">Jetzt bestellen</button></p>

  <button @click="store.commit('clear')">Warenkorb löschen</button>
</template>

<style>
.delete {
  margin-left: 0.5rem;
}
</style>
