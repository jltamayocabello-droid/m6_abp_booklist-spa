<template>
  <nav class="nav">
    <RouterLink class="navLink" :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink class="navLink" :to="{ name: 'books' }">Books</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
}
.navLink {
  text-decoration: none;
  color: #111827;
}
.navLink.router-link-active {
  font-weight: 600;
}
</style>
