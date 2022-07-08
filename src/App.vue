<script setup>
import Header from './components/header/header.vue';
import Order from './components/order.vue';
import Advantages from './components/advantages/advantages.vue';
import Work from './components/work/work.vue';

</script>

<template id="app">

  <Header />

  <main>
    <Order />
    <Advantages />
    <Work />
  </main>
</template>

<style>
@import './assets/base.css';
</style>
