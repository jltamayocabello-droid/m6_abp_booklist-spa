<template>
  <nav class="nav">
    <RouterLink class="navLink" :to="{ name: 'home' }">Inicio</RouterLink>
    <RouterLink class="navLink" :to="{ name: 'books' }">Catálogo de Libros</RouterLink>

    <template v-if="loginStore.sesion">
      <RouterLink class="navLink" :to="{ name: 'profile' }">Perfil</RouterLink>
      <button class="navBtn" @click="logout">Cerrar sesión</button>
    </template>
    <template v-else>
      <RouterLink class="navLink" :to="{ name: 'login' }">Iniciar Sesión</RouterLink>
    </template>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useLoginStore } from '../stores/login.store.js'
import { useFlashStore } from '../stores/flash.store.js'

const router = useRouter()
const loginStore = useLoginStore()
const flashStore = useFlashStore()

function logout() {
  loginStore.$reset()
  flashStore.show('Sesión cerrada correctamente.', 'error')
  router.push({ name: 'home' })
}
</script>

<style scoped>
.nav {
  display: flex;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  align-items: center;
  justify-content: space-evenly;
}
.navLink {
  text-decoration: none;
  color: #111827;
}
.navLink.router-link-active {
  font-weight: 600;
}
.navBtn {
  padding: 4px 12px;
  background: transparent;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  color: #374151;
  transition: background 0.2s;
}
.navBtn:hover {
  background: #f3f4f6;
}
</style>
