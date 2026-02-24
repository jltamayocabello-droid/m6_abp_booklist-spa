<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <section class="not-found">
    <span class="code">404</span>
    <h1>Página no encontrada</h1>
    <p>La ruta que buscas no existe o fue movida.</p>
    <button class="btn-home" @click="router.push({ name: 'home' })">Volver al inicio</button>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 12px;
  text-align: center;
  padding: 32px 16px;
}

.code {
  font-size: 6rem;
  font-weight: 800;
  color: #e5e7eb;
  line-height: 1;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #111827;
}

p {
  color: #6b7280;
  margin: 0;
}

.btn-home {
  margin-top: 8px;
  padding: 10px 24px;
  background: #6366f1;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-home:hover {
  background: #4f46e5;
}
</style>
