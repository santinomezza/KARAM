<template>
  <div id="app" class="site">
    <SkipLink />
    <Header />
    <main id="main-content" class="main-content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import SkipLink from './components/SkipLink.vue'
</script>

<style>
@import './assets/css/main.css';
</style>
