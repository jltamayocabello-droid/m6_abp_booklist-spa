<template>
  <section class="card">
    <h2>Catálogo</h2>

    <div class="grid">
      <BookCard v-for="book in books" :key="book.id" :book="book" @book-deleted="forwardDeleted" />
    </div>
  </section>
</template>

<script setup>
import BookCard from './BookCard.vue'

defineProps({
  books: { type: Array, required: true },
})

const emit = defineEmits(['bookDeleted'])

function forwardDeleted(id) {
  emit('bookDeleted', id)
}
</script>

<style scoped>
.card {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
</style>
