<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: { type: String, default: '' },
  color: { type: String, default: 'success' },
})

const visible = ref(Boolean(props.message))

watch(
  () => props.message,
  (val) => {
    if (val) {
      visible.value = true
      setTimeout(() => (visible.value = false), 3000)
    }
  },
  { immediate: true },
)
</script>

<template>
  <section class="home">
    <div v-if="visible && message" class="flash" :class="`flash-${color}`" role="alert">
      {{ message }}
    </div>

    <h1>BookList</h1>
    <p>Bienvenido. Usa la barra de navegación para gestionar tus libros.</p>
  </section>
</template>

<style scoped>
.home {
  display: grid;
  gap: 16px;
}

h1 {
  margin: 0 0 4px;
}

.flash {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  animation: fadeIn 0.3s ease;
}

.flash-success {
  background: #dcfce7;
  color: #166534;
  border: 1px solid #bbf7d0;
}

.flash-error {
  background: #fee2e2;
  color: #991b1b;
  border: 1px solid #fecaca;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
