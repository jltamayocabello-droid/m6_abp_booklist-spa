<template>
  <section class="page">
    <header class="header">
      <h1>Lista de Libros</h1>
      <p>Administra tu catálogo: agrega libros y revisa el listado.</p>

      <button type="button" @click.once="showInfo" :disabled="tipShown" class="tip-btn">
        {{ tipShown ? 'Tip mostrado ✓' : 'Ver tip de uso' }}
      </button>
      <small v-if="tip">{{ tip }}</small>
    </header>

    <BookForm @book-created="handleBookCreated" />

    <BookList :books="store.books" @book-deleted="handleBookDeleted" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'
import { useBookStore } from '../stores/books.js'

const store = useBookStore()

const tip = ref('')
const tipShown = ref(false)

function showInfo() {
  tip.value = 'Eventos: BookCard emite -> BookList re-emite -> BooksView llama al store.'
  tipShown.value = true
}

function handleBookCreated(book) {
  store.addBook(book)
}

function handleBookDeleted(id) {
  store.deleteBook(id)
}
</script>

<style scoped>
.page {
  display: grid;
  gap: 16px;
}
.header {
  margin-bottom: 0;
}
.tip-btn:disabled {
  opacity: 0.6;
  cursor: default;
}
</style>
