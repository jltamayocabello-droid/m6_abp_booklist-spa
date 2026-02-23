<template>

<section class="card">
<div class="list">
  <h2>Catálogo</h2>
  <BookCard 
  v-for="book in books"
  :key="book.id"
  :book="book"
  @book-deleted="onBookDeleted"
  />
</div>
</section>

</template>

<script setup>
import BookCard from './BookCard.vue';

defineProps({
  books: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['bookDeleted'])

function onBookDeleted(id) {
  emit('bookDeleted', id)
}

</script>

<style scoped>
.card { border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px; }
.grid { display: grid; grid-template-columns: 1fr; gap: 10px; }
</style>
