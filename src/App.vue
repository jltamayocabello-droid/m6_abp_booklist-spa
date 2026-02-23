<template>
  <main class="container">
    <header class="header">
      <h1>BookList</h1>
      <p>
        Usuario: <strong>{{ userName }}</strong>
      </p>
      <input type="text" :value="userName" @input="onNameInput" placeholder="Escribe tu nombre" />
    </header>

    <section class="card">
      <h2>Contador</h2>
      <p>Valor actual: {{ count }}</p>

      <div class="actions">
        <button type="button" @click="decrement">-1</button>
        <button type="button" @click="increment">+1</button>
        <button type="button" @click="reset">Reset</button>
      </div>
    </section>

    <section class="card">
      <div class="row">
        <h2>Catálogo</h2>
        <button type="button" @click="toggleHelp">Toogle ayuda (v-show)</button>

        <p v-show="showHelp" class="help">
          Aquí puedes ver un catálogo de libros
          <!--Lección 3 agregaremos libros desde un formulario con v-model.-->
        </p>

        <p>Total libros: {{ libros.length }}</p>

        <p v-if="libros.length === 0">No hay libros disponibles</p>
        <div v-else class="grid">
          <Libro v-for="libro in libros" :key="libro.id" :libro="libro" />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
//import { m } from 'vue-router/dist/index-DFCq6eJK';
//import router from './router';
import { ref } from 'vue'
import Libro from './components/Libro.vue'

// Model (estado): datos que representan el estado de la vista

const userName = ref('Tu nombre')
const count = ref(0)

// ViewModel (logica): funciones que conectan eventos de la visita con el modelo

function increment() {
  count.value++
}
function decrement() {
  count.value--
}
function reset() {
  count.value = 0
}
function onNameInput(event) {
  userName.value = event.target.value
}

// Ejemplo v-show (mostrar/ocultar sin destruir DOM)
const showHelp = ref(true)
function toggleHelp() {
  showHelp.value = !showHelp.value
}

const libros = ref([]);
</script>

<style scoped>
.container {
  max-width: 820px;
  margin: 40px auto;
  padding: 0 16px;
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Arial,
    sans-serif;
}
.header {
  margin-bottom: 16px;
}
.card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
  margin: 12px 0;
}
.actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.help {
  margin: 6px 0 12px;
  color: #4b5563;
}
input {
  width: 100%;
  padding: 10px 12px;
  margin-top: 8px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
</style>
