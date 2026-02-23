<template>
  <div class="app">
    <header>
      <AppNav />
    </header>

    <main class="page">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.app {
  min-height: 100vh;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
}
.page {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px;
}
</style>
