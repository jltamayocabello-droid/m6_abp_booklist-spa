<template>
  <section class="card">
    <h2>Catálogo</h2>

    <p v-if="props.books.length === 0">No hay libros</p>
    
    <div v-else class="grid">
      <BookCard v-for="book in props.books" :key="book.id" :book="book" />
    </div>


  </section>
  
</template>

<script setup>
import BookCard from './BookCard.vue'

const props = defineProps ({
  books: {type: Array, required: true}
  
})
</script>

<style scoped>
.card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; }
.grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
</style>
