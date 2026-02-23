

<template>
  <section>
    <h1>Book Details</h1>
    <p>Book id: {{ props.id }}</p>

    <!-- Lección 5: aquí buscarás el libro por id y mostrarás su info -->
  </section>
</template>

<script setup>
const props = defineProps({
  id: { type: String, required: true }
})
</script>


