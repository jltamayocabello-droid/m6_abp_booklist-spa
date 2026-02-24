<template>
  <section class="home">
    <div v-if="visible && message" class="flash" :class="`flash-${color}`" role="alert">
      {{ message }}
    </div>
    <img :src="logo" alt="Editorial Nova" height="200" />
    <h1>Presentación</h1>
    <p>
      <strong>Editorial Nova</strong> es una editorial enfocada en modernizar la gestión de su
      catálogo mediante una experiencia web clara, rápida y profesional, pensada para registrar,
      organizar y consultar libros de forma sencilla.
    </p>
    <p>En esta plataforma podrás:</p>
    <ul>
      <li>Agregar libros con información esencial (título, autor y categoría).</li>
      <li>Visualizar el catálogo en una lista dinámica y ordenada.</li>
      <li>Filtrar rápidamente por autor o categoría para encontrar lo que necesitas.</li>
      <li>
        Consultar el detalle de cada libro y mantener el catálogo actualizado eliminando registros
        cuando corresponda.
      </li>
    </ul>
    <p>
      El objetivo de la web es ofrecer una navegación fluida entre secciones y una interfaz modular
      y escalable, que sirva como base para futuras mejoras y nuevas funcionalidades.
    </p>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import logo from '@/assets/logo-editorial-nova.svg'

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
