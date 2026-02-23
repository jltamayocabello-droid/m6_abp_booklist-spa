

<template>
  <main class="container">
    <header class="header">
      <h1>BookList</h1>
      <p>Usuario: <strong>{{ userName }}</strong></p>
    </header>

    <section class="card">
      <h2>Nombre</h2>
      <input
        type="text"
        :value="userName"
        @input="onNameInput"
        placeholder="Escribe tu nombre"
      />
      <section class="card">
      <h2>Contador</h2>
      <p>Valor actual: {{ count }}</p>

      <div class="actions">
        <button type="button" @click="decrement">-1</button>
        <button type="button" @click="increment">+1</button>
        <button type="button" @click="reset">Reset</button>
      </div>
    </section>
    </section>

  </main>

</template>


<script setup>
//import { m } from 'vue-router/dist/index-DFCq6eJK';
//import router from './router';
import { ref } from 'vue';

// Model (estado): datos que representan el estado de la vista

const userName = ref('Tu nombre');
const count = ref(0);

// ViewModel (logica): funciones que conectan eventos de la visita con el modelo

function increment() {
  count.value++;
}

function decrement(){
  count.value--;
}

function reset(){
  count.value = 0;
}

function onNameInput(event) {
  userName.value = event.target.value
}
</script>



<style scoped>

.container {
  max-width: 720px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
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

input {
  width: 100%;
  padding: 10px 12px;
  margin: 8px 0;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
</style>
