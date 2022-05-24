<script setup>
import { useStore } from 'vuex';

const store = useStore();

defineProps({
  productId: Number,
  showCounter: Boolean,
});
</script>

<template>
  <p>
    <button @click="store.commit('add', productId)">+ Hinzufügen</button>&nbsp;
    <button @click="store.commit('remove', productId)">- Entfernen</button>&nbsp;

    <span v-if="showCounter" class="counter">({{ store.getters.countById(productId) }})</span>
  </p>
</template>
