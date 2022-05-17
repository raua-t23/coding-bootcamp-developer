<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>
