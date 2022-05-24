<script setup>
import CartCounter from './CartCounterComponent.vue';
</script>

<template>
  <div class="main-navigation">
    <nav>
      <ul>
        <li><router-link :to="{ path: '/' }">Speisekarte</router-link></li>
        <li>
          <router-link :to="{ path: '/checkout' }">Warenkorb <CartCounter /></router-link>
        </li>
        <li><router-link :to="{ path: '/contact' }">Kontakt</router-link></li>
      </ul>
    </nav>
  </div>
</template>
