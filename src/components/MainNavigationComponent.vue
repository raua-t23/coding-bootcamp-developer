<template>
  <div class="main-navigation">
    <nav>
      <ul>
        <li><router-link :to="{ path: '/' }">Home</router-link></li>
        <li><router-link :to="{ path: '/checkout' }">Warenkorb</router-link></li>
        <li><router-link :to="{ path: '/contact' }">Kontakt</router-link></li>
      </ul>
    </nav>
  </div>
</template>
