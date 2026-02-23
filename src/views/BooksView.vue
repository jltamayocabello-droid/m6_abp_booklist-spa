

<template>
  <section>
    <header class="header">
      <h1>Lista de Libros</h1>
      <p>Administra tu catálogo: agrega libros y revisa el listado.</p>
    </header>

    <BookForm @bookCreated="handleBookCreated" />

    <div class="spacer"></div>

    <BookList :books="books" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BookForm from '../components/BookForm.vue'
import BookList from '../components/BookList.vue'

const books = ref([
  { id: crypto.randomUUID(), title: 'Cien años de soledad', author: 'Gabriel García Márquez', category: 'Ficción', description: '' },
  { id: crypto.randomUUID(), title: '1984', author: 'George Orwell', category: 'Distopía', description: '' }

])

function handleBookCreated(book) {
  books.value = [book, ...books.value]
}

</script>

<style scoped>
.header { margin-bottom: 12px; }
</style>